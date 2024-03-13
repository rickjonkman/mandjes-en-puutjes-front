import BlockItem from "../../../components/block-items/BlockItem.jsx";
import PageTitle from "../../../components/page-title/PageTitle.jsx";
import Main from "../../../components/structure/Main.jsx";
import OuterContainer from "../../../components/structure/OuterContainer.jsx";
import Header from "../../../components/structure/Header.jsx";
import NavBarMain from "../../../components/navigation/nav--main/NavBarMain.jsx";
import HamIcon from "../../../assets/icons/hamburger-blue.svg";


const GroceriesMainPage = () => {

    const groceriesMainItems = [
        {
            imgDescription: "Een achtergrond-foto van iemand die koriander aan het snijden is",
            imgClass: "block-item__img--shopping-mode",
            blockItemTitle: "Winkelmodus",
            blockItemSubtitle: "Bekijk je lijst in winkelmodus zodra je boodschappen gaat doen",
            blockItemButtonClass: "groceries-main__button",
            buttonText: "Ga naar alle recepten"
        },
        {
            imgDescription: "Een achtergrond-foto van een bami-gerecht",
            imgClass: "block-item__img--current-list",
            blockItemTitle: "Beheer je nieuwe lijst",
            blockItemSubtitle: "Voeg producten toe aan je nieuwe boodschappenlijst",
            blockItemButtonClass: "groceries-main__button",
            buttonText: "Ga naar huidige lijst"
        },
        {
            imgDescription: "Een achtergrond-foto van een pasta-gerecht",
            imgClass: "block-item__img--recent-lists",
            blockItemTitle: "Recente lijsten",
            blockItemSubtitle: "Bekijk je meest recente boodschappenlijsten om gemakkelijker toe te voegen aan je nieuwe lijst",
            blockItemButtonClass: "groceries-main__button",
            buttonText: "Ga naar recente lijsten"
        }
    ];

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
                                    />
                                )
                            })
                        }
                    </div>

                </Main>

            </OuterContainer>
        </>
    );
};

export default GroceriesMainPage;