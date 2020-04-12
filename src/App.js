import React from "react";
import Heart from "./Heart";
import Secret from "./Secret";

import Fireworks from "./Fireworks";

import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(1);
  const [hideSecret, setHideSecret] = React.useState(true);

  const isCorrect = count === Secret();

  const renderSecret = () => {
    if (hideSecret) {
      return null;
    }

    if (isCorrect) {
      return (
        <div style={{ fontWeight: "bold" }}> That's Right! {<Heart />} </div>
      );
    }

    if (count <= 0) {
      return <div> What the fuck? Dude.... Higher! </div>;
    }

    if (count < Secret()) {
      return <div> NOOOOOOOOO. Higher!!! </div>;
    }

    if (count > Secret()) {
      return (
        <div>
          Hang on there buddy, we've only been dating a few months. Lower.
        </div>
      );
    }

    return <div> Nope! Try Again! </div>;
  };

  const handleSetGuess = setter => {
    setCount(setter);
    setHideSecret(true);
  };

  return (
    <div className="App">
      {!hideSecret && isCorrect && <Fireworks />}

      <h1> On a scale of 1 to 10, How much does Greg love Sunny? </h1>
      <h3> Your guess: {count} </h3>

      <button className="higher" onClick={() => handleSetGuess(x => x + 1)}>
        +
      </button>
      <button className="lower" onClick={() => handleSetGuess(x => x - 1)}>
        -
      </button>

      <br />

      <button onClick={() => setHideSecret(false)}> Is it right? </button>

      <br />

      {renderSecret(count)}
    </div>
  );
}
