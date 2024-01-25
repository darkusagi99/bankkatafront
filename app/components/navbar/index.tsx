import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="./">BankKata</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="./accounts">Accounts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./transactions">Transactions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./clients">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./users">Users</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    );
};

export default Navbar;