"use client"; // Render at client level

import {useEffect, useState} from "react";

function TransactionList ({accountId}) {

    const [transactions, setTransactions] = useState([]);

    /* Load data from API - Account list from client in parameters */
    const fetchData = async () => {
        let data = await fetch(`/api/transactions/account/${accountId}`)
            .then((response) => response.json())
            .then((data) => (data));

        console.log(data);
        if (data == undefined) { data = [] }
        setTransactions(data);

        return data;

    }

    /* Call data to use */
    useEffect(() => { fetchData(); }, [accountId])

    return (
        <>
            <div className="input-group mb-3">

                <table className="bg-secondary">
                    {
                        transactions.map(transaction => (
                                <tr className="" key={transaction.transactionId}>
                                    <td className="p-3">{transaction.date}</td>
                                    <td className="p-3">{transaction.label}</td>
                                    <td className="p-3">{transaction.transactionValue}</td>
                                </tr>
                            )
                        )
                    }
                </table>
            </div>
        </>
    );

}

export default TransactionList;