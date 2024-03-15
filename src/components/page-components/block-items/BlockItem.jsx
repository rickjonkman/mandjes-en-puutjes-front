import {addHashTag} from "../../../helpers/addHashTag.js";
import "/src/scss/block-items.scss";
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext.jsx";

const BlockItem = ({
                       blockItemSubject,
                       blockItemImg,
                       blockItemTitle,
                       blockItemSubtitle,
                       blockItemButtonClass,
                       buttonText,
                       authenticationRequired,
                       onButtonClick
                   }) => {

    const {authenticated} = useContext(AuthContext);


    return (
        <article className={!authenticated && authenticationRequired ? 'block-item--not-auth' : 'block-item'}>

            <div
                className={!authenticated && authenticationRequired ? `block-item__img ${blockItemImg}--not-auth` : `block-item__img ${blockItemImg}`}>

                <span>{addHashTag(blockItemSubject)}</span>

            </div>

            <div className="block-item__content">

                <div className="block-item__content--title">
                    <h3>{blockItemTitle}</h3>
                </div>

                <div className="block-item__content--subtitle">
                    <h4>{blockItemSubtitle}</h4>
                </div>

            </div>

            <button
                type="button"
                className={`block-item--button ${blockItemButtonClass}`}
                onClick={onButtonClick}>
                {buttonText}
            </button>

        </article>
    );
};

export default BlockItem;