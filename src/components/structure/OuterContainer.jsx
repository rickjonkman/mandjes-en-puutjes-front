import "/src/scss/page-structure.scss";

const OuterContainer = ({ children }) => {
    return (
        <div className="outer-container-class">
            {children}
        </div>
    );
};

export default OuterContainer;