const Field = (props) => {
    console.log(props);
    return (
        <div>
            <h2>{props.fieldTitle}</h2>
            <input
                value={props.value}
                type={props.inputType}
                placeholder={props.placeholder}
                onChange={(event) => {
                    props.setInput(event.target.value);
                }}
            />
        </div>
    );
};

export default Field;
