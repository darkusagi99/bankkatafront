import AccountSelector from "../components/accountUi/AccountSelector";
import CustomButton from "../components/CustomButton";
import NumberPicker from "../components/NumberPicker";
import Title from "../components/Title";

export default function Transactions() {
    return <>
        <Title label="Transactions" />
        <AccountSelector clientId="1" />
        <NumberPicker label="Valeur à transférer" min="-10000" max="10000"/>
        <CustomButton label="Add transaction"/>
    </>;
}