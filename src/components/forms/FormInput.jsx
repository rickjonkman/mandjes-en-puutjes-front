

const FormInput = ({ inputType, inputId, labelText, inputName, inputValue, inputChangeHandler }) => {



    return (
        <>
            <label htmlFor={inputId}>
                {labelText}
                <input
                    type={inputType}
                    id={inputId}
                    name={inputName}
                    value={inputValue}
                    onChange={inputChangeHandler}
                />
            </label>
        </>
    );
};

export default FormInput;