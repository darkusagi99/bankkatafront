import AccountSelector from "../components/accountUi/AccountSelector";
import CustomButton from "../components/CustomButton";
import NumberPicker from "../components/NumberPicker";

export default function Transactions() {
    return <>
        <p>Transactions Page</p>
        <AccountSelector />
        <NumberPicker label="Valeur à transférer" min="-10000" max="10000"/>
        <CustomButton label="Add transaction"/>
    </>;
}