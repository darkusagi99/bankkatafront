"use client"; // Render at client level

import Title from "../components/Title";
import AccountList from "../components/accountUi/AccountList";
import AccountSelector from "../components/accountUi/AccountSelector";
import {SetStateAction, useState} from "react";
import TransactionList from "../components/accountUi/TransactionList";

export default function Accounts() {

    const [clientId, setClientId] = useState(1);
    const [accountId, setAccountId] = useState(0);

    const updateAccountId = (newValue: SetStateAction<number>) => {
        setAccountId(newValue);
    }

    return <>
        <Title label="Accounts" />
        <div className="row">
            {/* Colonne 1 - liste des comptes */}
            <div className="col-md-2">
                <div>
                    <AccountList clientId={clientId}/>
                </div>
            </div>

            {/* Colonne 2 - détail des comptes */}
            <div className="col-md-6">
                <div className="column">
                    {/* Haut de page - choix des comptes */}
                   <div>
                       <AccountSelector clientId={clientId}  updateAccountId={updateAccountId}/>
                   </div>
                    {/* Bas de page - transaction des comptes */}
                    <div>
                        <TransactionList accountId={accountId}/>
                    </div>
                </div>
            </div>
        </div>
    </>;
}