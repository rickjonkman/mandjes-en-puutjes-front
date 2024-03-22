import React from 'react';

const ImageWrapper = ({ imageWrapperClass, imgSource, imgDescription, imgId, handleOnClick }) => {



    return (
        <figure className={imageWrapperClass}>
            <img
                src={imgSource}
                alt={imgDescription}
                id={imgId}
                onClick={handleOnClick}
            />
        </figure>
    );
};

export default ImageWrapper;