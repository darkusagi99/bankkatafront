
const AccountSelector = () => {

    return (
        <>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputAccountSelect">Choix compte : </label>
                </div>
                <select className="custom-select" id="inputAccountSelect">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </>
    );

};

export default AccountSelector;