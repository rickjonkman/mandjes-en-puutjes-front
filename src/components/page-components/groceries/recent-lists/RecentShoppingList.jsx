import React from 'react';

const RecentShoppingList = ({creationDate, children}) => {


    return (
        <div className="recent-shopping-list__class">

            <div className="recent-shopping-list__title-container">
                <h1>{creationDate}</h1>
            </div>

            {children}

        </div>
    );
};

export default RecentShoppingList;