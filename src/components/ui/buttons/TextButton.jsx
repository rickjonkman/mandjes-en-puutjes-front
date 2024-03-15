const TextButton = ({ buttonClass, onClickHandler, buttonText }) => {



    return (
        <button className={buttonClass} onClick={onClickHandler} type="button">
            {buttonText}
        </button>
    );
};

export default TextButton;