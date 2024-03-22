

const PreferenceTile = ({ preferenceDescription, imgDescription, preferenceImg, preferenceTitle, showPreference, handleChangePreference }) => {



    return (
        <div className={showPreference ? 'show-preference__green' : 'show-preference__red'}>
            <input
                type="checkbox"
                id={`preference-${preferenceDescription}`}
                name="preferences"
                checked={showPreference}
                onChange={() => handleChangePreference(preferenceDescription)}
            />
            <img
                src={preferenceImg}
                alt={`Afbeelding van ${imgDescription}`}
                className="preference-tile__img"
            />
            <h4>{preferenceTitle}</h4>
        </div>
    );
};

export default PreferenceTile;