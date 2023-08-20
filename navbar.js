function NavBar() {
    const currentPath = window.location.hash;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#/">
                    <img src="bank.png" width="30" height="30" alt="Bank Logo" />
                    BadBank
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${currentPath === '#/CreateAccount/' ? 'active' : ''}`}>
                            <a className="nav-link" href="#/CreateAccount/" title="Create Account">Create Account</a>
                        </li>
                        <li className={`nav-item ${currentPath === '#/deposit/' ? 'active' : ''}`}>
                            <a className="nav-link" href="#/deposit/" title="Deposit">Deposit</a>
                        </li>
                        <li className={`nav-item ${currentPath === '#/withdraw/' ? 'active' : ''}`}>
                            <a className="nav-link" href="#/withdraw/" title="Withdraw">Withdraw</a>
                        </li>
                        <li className={`nav-item ${currentPath === '#/alldata/' ? 'active' : ''}`}>
                            <a className="nav-link" href="#/alldata/" title="All Data">AllData</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
