

const SubmitButton = ({ buttonClass, buttonType, onSubmitHandler, buttonText }) => {
    return (
        <button className={buttonClass} type={buttonType} onSubmit={onSubmitHandler}>
            {buttonText}
        </button>
    );
};

export default SubmitButton;