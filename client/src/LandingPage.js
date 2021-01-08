import React from "react";
import "./LandingPage.css";

function LandingPage() {
  function submitAccountName() {
    // TODO
  }

  function calculateCharacterImport() {
    // TODO
  }

  function CharacterImportForm() {
    return (
      <>
        <div className="character-form">
          <h2>Character Import</h2>
          <form>
            <div>
              <input className="input" type="text" placeholder="Account Name" />
              <button className="btn" type="button" onClick={submitAccountName}>
                Submit
              </button>
            </div>
            <div>
              <select className="drop-down" placeholder="Character">
                <option
                  className="option-placeholder"
                  value=""
                  disabled
                  selected
                >
                  Select your character
                </option>
              </select>
              <button
                className="btn"
                type="button"
                onClick={calculateCharacterImport}
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

  function submitPobCode() {
    // TODO
  }

  function PoBImportForm() {
    return (
      <>
        <div className="pob-form">
          <h2>Path of Building Import</h2>
          <form>
            <input
              className="input"
              id="pob_input"
              type="text"
              placeholder="Path of Building code"
            />
            <button className="btn" type="button" onClick={submitPobCode}>
              Calculate
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="landing-form-container">
        <div className="landing-form">
          <CharacterImportForm />
          <PoBImportForm />
        </div>
      </div>
      <p className="footer">Developed by MattHub</p>
    </>
  );
}

export default LandingPage;
