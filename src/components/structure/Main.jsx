import "/src/scss/page-structure.scss";

const Main = ({ children }) => {
    return (
        <main className="main-class">
            {children}
        </main>
    );
};

export default Main;