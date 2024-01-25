"use client"; // Render at client level

import {useEffect, useState} from "react";

function AccountList (props) {

    const [accounts, setAccounts] = useState([]);

    /* Load data from API - Account list from client in parameters */
    const fetchData = async () => {
        let data = await fetch(`/api/clients/${props.clientId}/details`)
            .then((response) => response.json())
            .then((data) => (data.accountList));

        console.log(data);
        if (data == undefined) { data = [] }
        setAccounts(data);

        return data;

    }

    /* Call data to use */
    useEffect(() => { fetchData(); }, [])

    return (
        <>
        <div className="input-group mb-3">

            <ul className="list-group">
                {
                    accounts.map(account => (
                            <li className="list-group-item" key={account.accountId}>
                                {account.accountNumber}
                                <span className="badge badge-info rounded-pill bg-info">{account.currentBalance}</span>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
        </>
    )
        ;

}

export default AccountList;