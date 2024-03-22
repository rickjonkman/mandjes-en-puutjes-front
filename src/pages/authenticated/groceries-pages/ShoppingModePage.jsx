import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamIcon from "../../../assets/icons/hamburger-blue.svg";
import Main from "../../../components/structure/Main.jsx";
import "/src/scss/scss-pages/groceries.scss";
import GroceriesContextProvider from "../../../context/GroceriesContext.jsx";
import Footer from "../../../components/structure/Footer.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import {useEffect, useState} from "react";
import SubmitButton from "../../../components/ui/buttons/SubmitButton.jsx";


const ShoppingModePage = () => {

    const initialItem = [
        {
            id: 100,
            name: "Productnaam",
            inStorage: false,
            notFound: false,
        },
        {
            id: 101,
            name: "Productnaam",
            inStorage: false,
            notFound: false,
        }
    ]

    const listFromLocalStorage = localStorage.getItem("currentList");

    const [currentList, setCurrentList] = useState(JSON.parse(listFromLocalStorage) || [initialItem]);
    const [productItem, setProductItem] = useState({
        id: 0,
        name: "",
        inStorage: false,
        notFound: false,
    })

    useEffect(() => {
        localStorage.setItem("currentList", JSON.stringify(currentList));
    }, [currentList]);

    const handleAddProduct = (product) => {
        setCurrentList([...currentList, product]);
    }

    return (
        <GroceriesContextProvider>
            <OuterContainer>

                <Header>
                    <NavBarMain hamburgerIcon={HamIcon}/>
                </Header>

                <Main>

                    <PageTitle
                        pageTitleClass="groceries-shopping-mode__title"
                        pageTitle="Winkelmodus"
                    />

                    <div className="groceries-shopping-mode__container">

                        <aside className="groceries-shopping-mode__menu">

                            <div className="form__add-item--container">
                                <form className="shopping-mode__form--add-item" onSubmit={() => handleAddProduct(productItem)}>
                                    <label htmlFor="form__add-item--text-input">Voeg product toe</label>
                                    <input
                                        type="text"
                                        id="form__add-item--text-input"
                                        name="search"
                                        placeholder="Type product..."
                                        value={productItem.name}
                                        onChange={(e) => setProductItem({
                                            id: Math.floor(Math.random() * 1000),
                                            name: e.target.value,
                                            inStorage: false,
                                            notFound: false,
                                        })}
                                    />

                                    <SubmitButton
                                        buttonClass="form__add-item--submit-button"
                                        buttonText="Voeg toe"
                                    />
                                </form>
                            </div>

                        </aside>

                        <section className="groceries-shopping-mode__content">
                            <ul>
                            {
                                currentList.map((product) => (
                                    <li key={product.id}>

                                        <div className="shopping-mode__content--checkbox">
                                            <input type="checkbox" id={product.id} name={product.name} value={product.name} />
                                            <label htmlFor={product.id}>{product.name}</label>
                                        </div>

                                        <div className="shopping-mode__content--buttons">

                                        </div>

                                    </li>
                                ))
                            }
                            </ul>
                        </section>

                    </div>

                </Main>

            </OuterContainer>

            <Footer/>
        </GroceriesContextProvider>
    )
        ;
};

export default ShoppingModePage;