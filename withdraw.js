function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [buttonLabel, setButtonLabel] = React.useState('Withdraw');

  // Fetching the user 'abel'
  let user = ctx.users.find(user => user.name === 'abel');
  if(!user) {
    console.error("User 'abel' not found.");
    return null;
  }

  function validateAmount(amount) {
    if(isNaN(amount) || amount < 0) {
      setStatus('Please enter a positive number.');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if(amount > user.balance) {
      setStatus('OVERDRAFT');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    if(!validateAmount(parseFloat(withdrawAmount))) return;

    user.balance -= parseFloat(withdrawAmount);
    setStatus(`Success! New balance is $${user.balance}`);
    setWithdrawAmount('');
    setButtonLabel('Withdraw Again');
  }

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      title={`Balance: $${user.balance}`}
      body={
        <>
          Withdraw Amount<br/>
          <input 
            type="number" 
            className="form-control" 
            id="withdraw-amount" 
            value={withdrawAmount}
            onChange={e => setWithdrawAmount(e.currentTarget.value)}
          /><br/>
          <button 
            type="submit" 
            className="btn btn-light" 
            onClick={handleWithdraw}
            disabled={withdrawAmount <= 0 || withdrawAmount > user.balance}
          >
            {buttonLabel}
          </button>
        </>
      }
      status={status}
    />
  );
}
