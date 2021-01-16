import logo from "./logo.svg";
import "./App.css";

const Hello = (props) => {
    return (
        <div>
            <p>
                Hi {props.name}, to day is a beautiful day. The temperature is{" "}
                {props.temp} degree
            </p>
        </div>
    );
};

const App = () => {
    const name = "John";
    const temperature = 26;

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name={name} temp={temperature} />
            <Hello name="Daisy" />
        </div>
    );
};
export default App;
