
function NumberPicker(props) {

    return (
        <>
            <div className="p-4">
                <label className="p-2" htmlFor="quantity">{props.label}</label>
                <input type="number" id="quantity" name="quantity" min={props.min} max={props.max} />
            </div>
        </>
    );
}

export default NumberPicker;