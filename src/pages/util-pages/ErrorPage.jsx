

const ErrorPage = ({ error }) => {
    return (
        <div>
            <h1>Error!</h1>
            <h2>An error occurred: {error.message}</h2>
        </div>
    );
};

export default ErrorPage;