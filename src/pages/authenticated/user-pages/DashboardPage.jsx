import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import PinkHamIcon from "../../../assets/icons/hamburger-pink.svg";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import {dashboardItems} from "../../../constants/dashboardMainItems.js";
import BlockItem from "../../../components/page-components/block-items/BlockItem.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";
import Main from "../../../components/structure/Main.jsx";
import {UserContext} from "../../../context/UserContext.jsx";
import {useContext} from "react";
import Footer from "../../../components/structure/Footer.jsx";
import DashboardImageOne from "../../../assets/images/dashboard-tomato--img1.png";
import {useNavigate} from "react-router-dom";


const DashboardPage = () => {

    const navigate = useNavigate();

    const { userDetails } = useContext(UserContext);

    const {preferences} = userDetails;

    return (
        <OuterContainer>

            <Header>
                <NavBarMain hamburgerIcon={PinkHamIcon} />
            </Header>

            <Main>

                <PageTitle pageTitleClass="dashboard-main__title" pageTitle="Dashboard" />

                <div className="dashboard-main__grid">
                    {
                        preferences === null &&
                        <BlockItem
                            blockItemImg="block-item__img--dash-preferences-na"
                            blockItemSubject="Belangrijk"
                            blockItemTitle="Voorkeuren"
                            blockItemSubtitle="Stel je voorkeuren in"
                            blockItemButtonClass="dashboard-main__button"
                            buttonText="Voorkeuren instellen"
                            onButtonClick={() => navigate('/general/preferences')}
                        />
                    }

                    {
                        dashboardItems.map((item, index) => {
                            return (
                                <BlockItem
                                    key={index}
                                    blockItemImg={item.imgClass}
                                    blockItemSubject="Dashboard"
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
    );
};

export default DashboardPage;