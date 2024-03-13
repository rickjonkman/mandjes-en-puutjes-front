import {addHashTag} from "../../helpers/addHashTag.js";
import "/src/scss/block-items.scss";

const BlockItem = ({ blockItemSubject, blockItemImg, blockItemTitle, blockItemSubtitle, blockItemButtonClass, buttonText }) => {



    return (
        <article className="block-item">

            <div className={`block-item__img ${blockItemImg}`}>

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

            <button type="button" className={`block-item--button ${blockItemButtonClass}`}>
                {buttonText}
            </button>

        </article>
    );
};

export default BlockItem;