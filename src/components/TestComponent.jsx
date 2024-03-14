import React from 'react';

const TestComponent = ({ recipe }) => {
    return (
        <div>
            <p>{recipe.recipeName}</p>
        </div>
    );
};

export default TestComponent;