import React, { useState } from "react";
import "./MainScreen.css";
import { evaluate } from "mathjs";
import { connect } from "react-redux";
import { saveCalculation } from "../redux/action/actions";

function MainScreen({ saveCalc, histories }) {
  const [display, setDisplay] = useState([]);
  const [whichDisplay, setWhichDisplay] = useState(true);
  let numbers = "1234567890".split("");
  let operators = "+-*/".split("");

  const handleNumbers = (e) => {
    setDisplay([...display, e.target.value]);
  };

  const handleTotal = () => {
    setDisplay([evaluate(display.join(""))]);
    saveCalc(`${display.join("")} = ${evaluate(display.join(""))}`);
  };

  const handleReset = () => {
    setDisplay([]);
  };

  return (
    <div>
      <div className="container">
        <h1>Redux Calculator</h1>
        <div className="display">
          {whichDisplay ? (
            <h5>{display}</h5>
          ) : (
            histories.map((history, index) => <p key={index}>{history}</p>)
          )}
        </div>
        <div className="d-flex">
          <div className="nums">
            <div className="button-container">
              {numbers.map((number) => (
                <button
                  key={number}
                  value={number}
                  onClick={(e) => handleNumbers(e, "value")}
                  className="number-button"
                >
                  {number}
                </button>
              ))}
              <button className="number-button" onClick={handleTotal}>
                =
              </button>
              <button className="number-button" onClick={handleReset}>
                C
              </button>
            </div>
          </div>
          <div className="operators-container">
            {operators.map((operator) => (
              <button
                key={operator}
                value={operator}
                onClick={(e) => handleNumbers(e, "value")}
                className="operators-button"
              >
                {operator}
              </button>
            ))}
          </div>
        </div>
        <button
          className="history-button btn-primary"
          onClick={() => setWhichDisplay(!whichDisplay)}
        >
          {whichDisplay ? 'View History' : 'Lets Calc!'}
        </button>
      </div>
    </div>
  );
}

const stateProps = (initialState) => {
  return {
    histories: initialState.histories,
  };
};

const dispatchProps = (dispatch) => {
  return {
    saveCalc: (data) => dispatch(saveCalculation(data)),
  };
};

export default connect(stateProps, dispatchProps)(MainScreen);
