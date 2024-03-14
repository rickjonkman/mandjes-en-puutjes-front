import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/ui/navigation/nav--main/NavBarMain.jsx";
import HamburgerIcon from "/src/assets/icons/hamburger-blue.svg";
import Main from "../../../components/structure/Main.jsx";
import PageTitle from "../../../components/page-components/page-title/PageTitle.jsx";

const RecentListsPage = () => {

    const fetchShoppingLists = async () => {

        try {
            const response = await axios.get('http://localhost:3001/shopping-lists');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <OuterContainer>

            <Header>
                <NavBarMain hamburgerIcon={HamburgerIcon} />
            </Header>

            <Main>
                <PageTitle pageTitleClass="groceries-recent-lists__title" pageTitle="Recente lijsten" />
            </Main>

        </OuterContainer>
    );
};

export default RecentListsPage;