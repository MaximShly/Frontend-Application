function AllData() {
  const ctx = React.useContext(UserContext);

  return (
      <Card
          bgcolor="primary"
          header="All Data"
          body={
              <div className="table-responsive">
                  <table className="table">
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Password</th>
                              <th>Balance</th>
                          </tr>
                      </thead>
                      <tbody>
                          {ctx.users.map((user, index) => (
                              <tr key={index}>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  <td>{user.password}</td>
                                  <td>${user.balance}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          }
      />
  );
}
