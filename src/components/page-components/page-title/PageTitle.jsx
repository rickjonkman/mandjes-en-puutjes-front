import "/src/scss/page-titles.scss";

const PageTitle = ({ pageTitleClass, pageTitle }) => {



    return (
        <section className={`page-title ${pageTitleClass}`}>

            <div className="page-title__content">
                <h1>{pageTitle}</h1>
            </div>

        </section>
    );
};

export default PageTitle;