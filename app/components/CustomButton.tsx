
function CustomButton (props) {
    return(
        <>
            <button type="submit" className="btn btn-primary btn-lg">{props.label}</button>
        </>
    );
}

export default CustomButton;