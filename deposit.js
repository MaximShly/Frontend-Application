function Deposit() {
  const [amount, setAmount] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const ctx = React.useContext(UserContext);

  const user = ctx.users.find(user => user.name === 'abel');

  function handleDeposit() {
      let numAmount = Number(amount);
      if (isNaN(numAmount) || numAmount < 0) {
          alert("Please enter a valid positive number!");
          return;
      }
      user.balance += numAmount;
      setSuccess(`Deposited $${numAmount}. New balance: $${user.balance}`);
      setAmount('');
  }

  return (
      <Card
          bgcolor="primary"
          header="Deposit"
          title={`Balance: $${user.balance}`}
          text={success}
          body={
              <div>
                  Amount<br />
                  <input type="input" className="form-control" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
                  <button type="submit" className="btn btn-light" onClick={handleDeposit}>{success ? 'Deposit Again' : 'Deposit'}</button>
              </div>
          }
      />
  )
}
