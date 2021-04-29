const Results = ({ display, name, email, password }) => {
    return (
        <div id="result" className={display}>
            <h1>Results</h1>
            <div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Password: {password}</div>
            </div>

            <button>Edit your info</button>
        </div>
    );
};

export default Results;
