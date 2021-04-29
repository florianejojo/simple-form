import "./App.css";
import Results from "./Results";
// import Fields from "./Fields";
import { useState } from "react";
import Title from "./Title";
import Field from "./Field";

function App() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [display, setDisplay] = useState("hidden");
    const [hideForm, setHideForm] = useState("");

    return (
        <div className="container">
            <form
                className={hideForm}
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log("click");

                    if (password !== password2) {
                        setErrorMessage(
                            "Les mots de passes ne sont pas identiques"
                        );
                    }
                    setDisplay("");
                    setHideForm("hidden");
                }}
            >
                <div className="fields">
                    <Title title="Create account" />

                    <Field
                        value={name}
                        setInput={setName}
                        fieldTitle="Name"
                        inputType="text"
                        placeholder="Jean Dupont"
                    />
                    <Field
                        value={email}
                        setInput={setEmail}
                        fieldTitle="Email"
                        inputType="email"
                        placeholder="jeandupont@lereacteur.io"
                    />
                    <Field
                        value={password}
                        setInput={setPassword}
                        fieldTitle="Password"
                        inputType="password"
                        placeholder="nfHDJSJSjdfjn67890"
                    />
                    <Field
                        value={password2}
                        setInput={setPassword2}
                        fieldTitle="Confirm your password"
                        inputType="password"
                        placeholder="nfHDJSJSjdfjn67890"
                    />
                    <div>{errorMessage}</div>

                    <input className="submit" type="submit" value="Register" />
                </div>
            </form>
            <Results
                display={display}
                name={name}
                email={email}
                password={password}
            />
        </div>
    );
}

export default App;
