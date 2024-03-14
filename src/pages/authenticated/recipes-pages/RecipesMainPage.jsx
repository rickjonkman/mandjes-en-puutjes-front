import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamburgerIcon from "../../../assets/icons/hamburger-green.svg";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import {recipesMainItems} from "../../../constants/recipesMainItems.js";
import BlockItem from "../../../components/page-components/block-items/BlockItem.jsx";


const RecipesMainPage = () => {
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
                                    blockItemImg={item.imgClass}
                                    blockItemSubject="Recepten"
                                    blockItemTitle={item.blockItemTitle}
                                    blockItemSubtitle={item.blockItemSubtitle}
                                    blockItemButtonClass={item.blockItemButtonClass}
                                    buttonText={item.buttonText}
                                />
                            )
                        })
                    }
                </div>

            </Main>

        </OuterContainer>
    );
};

export default RecipesMainPage;