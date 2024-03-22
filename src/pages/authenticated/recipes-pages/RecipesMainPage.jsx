import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamburgerIcon from "../../../assets/icons/hamburger-green.svg";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import {recipesMainItems} from "../../../constants/recipesMainItems.js";
import BlockItem from "../../../components/page-components/block-items/BlockItem.jsx";
import Footer from "../../../components/structure/Footer.jsx";
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";


const RecipesMainPage = () => {

    const navigate = useNavigate();

    return (
        <OuterContainer>

            <Header>
                <NavBarMain hamburgerIcon={HamburgerIcon} />
            </Header>

            <Main>

                <PageTitle pageTitleClass="recipes-main__title" pageTitle="Recepten"/>

                <div className="recipes-main__grid">
                    {
                        recipesMainItems.map((item, index) => {
                            return (
                                <BlockItem
                                    key={index}
                                    blockItemImg={item.image.imgClass}
                                    blockItemSubject="Recepten"
                                    blockItemTitle={item.content.blockItemTitle}
                                    blockItemSubtitle={item.content.blockItemSubtitle}
                                    blockItemButtonClass={item.button.blockItemButtonClass}
                                    buttonText={item.button.buttonText}
                                    authenticationRequired={item.authenticationRequired}
                                    onButtonClick={() => navigate(item.button.navigateTo)}
                                />
                            )
                        })
                    }
                </div>

            </Main>

            <Footer />

        </OuterContainer>
    );
};

export default RecipesMainPage;