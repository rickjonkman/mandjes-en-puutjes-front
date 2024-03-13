

const Form = ({ formClass, formSubmitHandler, children }) => {



    return (
        <form className={formClass} onSubmit={formSubmitHandler}>
            {children}
        </form>
    );
};

export default Form;