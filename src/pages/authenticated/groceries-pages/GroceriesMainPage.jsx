import BlockItem from "../../../components/page-components/block-items/BlockItem.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import Main from "../../../components/structure/Main.jsx";
import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamIcon from "../../../assets/icons/hamburger-blue.svg";
import {groceriesMainItems} from "../../../constants/groceriesMainItems.js";
import Footer from "../../../components/structure/Footer.jsx";
import {useNavigate} from "react-router-dom";


const GroceriesMainPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <OuterContainer>

                <Header>
                    <NavBarMain hamburgerIcon={HamIcon} />
                </Header>

                <Main>

                    <PageTitle pageTitleClass="groceries-main__title" pageTitle="Boodschappen"/>

                    <div className="groceries-main__grid">
                        {
                            groceriesMainItems.map((item, index) => {
                                return (
                                    <BlockItem
                                        key={index}
                                        blockItemImg={item.imgClass}
                                        blockItemSubject="Boodschappen"
                                        blockItemTitle={item.blockItemTitle}
                                        blockItemSubtitle={item.blockItemSubtitle}
                                        blockItemButtonClass={item.blockItemButtonClass}
                                        buttonText={item.buttonText}
                                        onButtonClick={() => navigate(item.onButtonClick)}
                                    />
                                )
                            })
                        }
                    </div>

                </Main>

                <Footer />

            </OuterContainer>
        </>
    );
};

export default GroceriesMainPage;