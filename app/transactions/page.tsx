"use client"; // Render at client level

import AccountSelector from "../components/accountUi/AccountSelector";
import CustomButton from "../components/CustomButton";
import NumberPicker from "../components/NumberPicker";
import Title from "../components/Title";
import {FormEvent, SetStateAction, useState} from "react";

export default function Transactions() {

    const [clientId, setClientId] = useState(1);
    const [accountId, setAccountId] = useState(1);
    const [transactionValue, setTransactionValue] = useState(33);

    const updateTransactionValue = (newValue: SetStateAction<number>) => {
        setTransactionValue(newValue);
    }

    const updateAccountId = (newValue: SetStateAction<number>) => {
        setAccountId(newValue);
    }

    async function onSubmit(event : FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log("Button Submit - add transaction");

        let data = await fetch(`/api/transactions?clientId=${clientId}&accountId=${accountId}&transactionValue=${transactionValue}&label=Test`, {method:"PUT"})
            .then((response) => response.json());

    }

    return <>
        <Title label="Transactions" />
        <form onSubmit={onSubmit}>
            <AccountSelector clientId={clientId} updateAccountId={updateAccountId}/>
            <NumberPicker label="Valeur à transférer" min="-10000" max="10000" updateTransactionValue={updateTransactionValue}/>
            <CustomButton label="Add transaction"/>
        </form>
    </>;
}