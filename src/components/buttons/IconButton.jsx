

const IconButton = ({ buttonId, buttonClickHandler, iconSrc, iconDescription, iconId }) => {
    return (
        <button type="button" id={buttonId} onClick={buttonClickHandler}>
            <img
                src={iconSrc}
                alt={iconDescription}
                id={iconId}
            />
        </button>
    );
};

export default IconButton;