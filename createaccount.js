function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  const ctx = React.useContext(UserContext);  

  React.useEffect(() => {
    setIsDisabled(name.length < 3 || email.length < 3 || password.length < 8);
  }, [name, email, password]);

  function validateName() {
    if (name.trim() === '') {
        alert('Name field cannot be left blank.');
        return false;
    }
    return true;
  }

  function validateEmail() {
    if (email.trim() === '') {
        alert('Email field cannot be left blank.');
        return false;
    }
    return true;
  }

  function validatePassword() {
    if (password.length < 8) {
        alert('Password should be at least 8 characters long.');
        return false;
    }
    return true;
  }

  function handleCreate(){
    if (!validateName() || !validateEmail() || !validatePassword()) return;

    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} onBlur={validateName} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} onBlur={validateEmail}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} onBlur={validatePassword}/><br/>
              <button type="submit" className="btn btn-light" disabled={isDisabled} onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}
