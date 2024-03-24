import React, {useEffect, useState} from 'react';
import RecentShoppingList from "./RecentShoppingList.jsx";
import axios from "axios";
import {getUsername} from "../../../../helpers/getUsername.js";
import RecentShoppingListItem from "./RecentShoppingListItem.jsx";

const RecentListsContainer = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [recentLists, setRecentLists] = useState([{
        id: 0,
        creationDate: null,
        products: [],
        username: '',
    }]);

    useEffect(() => {
        const fetchData = async () => {
            await fetchRecentLists();
        }
        void fetchData();
    }, []);

    const fetchRecentLists = async () => {
        const username = getUsername();

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/shopping-lists/get-lists?username=${username}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                })
            setRecentLists(response.data);
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="recent-shopping-lists__container">

            { error && <p>Er is een fout opgetreden: {error.message}</p> }
            { isLoading && <p>Gegevens worden geladen...</p> }

            {
                recentLists.length !== 0 ?
                recentLists.map((list, index) => (
                    <RecentShoppingList
                        key={index}
                        creationDate={list.creationDate}>
                        {list.products.map((product, index) => (

                            <RecentShoppingListItem key={index} grocery={product.name} />

                        ))}
                    </RecentShoppingList>
                )) : <p>Er zijn geen recente lijsten gevonden.</p>
            }

        </section>
    );
};

export default RecentListsContainer;