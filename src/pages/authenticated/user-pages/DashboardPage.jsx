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


const DashboardPage = () => {

    const { userDetails } = useContext(UserContext);

    return (
        <OuterContainer>

            <Header>
                <NavBarMain hamburgerIcon={PinkHamIcon} />
            </Header>

            <Main>

                <PageTitle pageTitleClass="dashboard-main__title" pageTitle="Dashboard" />

                <div className="dashboard-main__grid">
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
                                />
                            )
                        })
                    }
                </div>

            </Main>

        </OuterContainer>
    );
};

export default DashboardPage;