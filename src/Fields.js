import Title from "./Title";
import Field from "./Field";

const Fields = ({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
}) => {
    return (
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
            <input className="submit" type="submit" value="Register" />
        </div>
    );
};

export default Fields;
