import React from 'react';

const ImageWrapper = ({ imageWrapperClass, imgSource, imgDescription, imgId }) => {



    return (
        <figure className={imageWrapperClass}>
            <img
                src={imgSource}
                alt={imgDescription}
                id={imgId}
            />
        </figure>
    );
};

export default ImageWrapper;