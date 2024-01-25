
function NumberPicker(props) {

    const handleChange = (event) => {
        // 👇 Get input value from "event"
        props.updateTransactionValue(event.target.value);
    };

    return (
        <>
            <div className="p-4">
                <label className="p-2" htmlFor="quantity">{props.label}</label>
                <input type="number" id="quantity" name="quantity" min={props.min} max={props.max} onChange={handleChange} />
            </div>
        </>
    );
}

export default NumberPicker;