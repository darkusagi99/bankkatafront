"use client"; // Render at client level

import {useEffect, useState} from "react";

function AccountSelector (props) {

    const [accounts, setAccounts] = useState([]);

    const handleChange = (event) => {
        // 👇 Get input value from "event"
        props.updateAccountId(event.target.value);
    };

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
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputAccountSelect">Choix compte : </label>
                </div>
                <select className="custom-select" id="inputAccountSelect" onChange={handleChange}>
                    <option selected>Choose...</option>
                    {
                        accounts.map(account => (
                                <option key={account.accountId} value={account.accountId}>{account.accountNumber}</option>
                            )
                        )
                    }
                </select>
            </div>
        </>
    );

}

export default AccountSelector;