

const DefaultButton = ({ buttonClass, onClickHandler, buttonText }) => {
    return (
        <button className={buttonClass} type="button" onClick={onClickHandler}>
            {buttonText}
        </button>
    );
};

export default DefaultButton;