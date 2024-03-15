import React, {useContext, useEffect, useState} from 'react';
import RecentShoppingList from "./RecentShoppingList.jsx";
import {UserContext} from "../../../../context/UserContext.jsx";
import axios from "axios";
import RecentShoppingListItem from "./RecentShoppingListItem.jsx";

const RecentListsContainer = () => {

    const {userDetails} = useContext(UserContext);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [shoppingLists, setShoppingLists] = useState([]);

    useEffect(() => {
        void fetchShoppingLists();

        return console.log('Recent lists are mounted');
    }, []);

    const fetchShoppingLists = async () => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/shopping-lists/get-lists?username=${userDetails.username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                });
            console.log(response);
            setShoppingLists(response.data);
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    console.log(shoppingLists);

    return (
        <section className="recent-shopping-lists__container">


            {
                shoppingLists.map((list) => {
                    return (
                        <RecentShoppingList
                            key={list.id}
                            creationDate={list.creationDate}>
                            {
                                list.groceries.map((grocery, index) => {
                                    return (
                                        <RecentShoppingListItem
                                            key={index}
                                            grocery={grocery}
                                        />
                                    )
                                })
                            }
                        </RecentShoppingList>
                    )
                })
            }

        </section>
    );
};

export default RecentListsContainer;