import React, { useState } from 'react';
import axios from 'axios';
import './LandingPage.css';
import Navbar from './Navbar.js';

function LandingPage() {
  const [account, setAccount] = useState('');
  const [character, setCharacter] = useState('');
  const [pobCode, setPobCode] = useState('');

  function handleSubmitAccount() {
    axios
      .get('/account/characters', {
        params: {
          accountName: account,
        },
      })
      .then((response) => {
        // TODO
      })
      .catch((error) => {
        // TODO
      });
  }

  function handleCalculateCharacter() {
    // TODO
  }

  function handleCalculatePobCode() {
    // TODO
  }

  return (
    <>
      <Navbar />
      <div className="landing-form-container">
        <div className="landing-form">
          <div className="character-form">
            <h2>Character Import</h2>
            <form>
              <div>
                <input
                  className="input"
                  type="text"
                  placeholder="Account Name"
                  id="accountName"
                  name="accountName"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                />
                <button
                  className="btn"
                  type="button"
                  onClick={handleSubmitAccount}
                >
                  Submit
                </button>
              </div>
              <div>
                <select
                  className="drop-down"
                  placeholder="Character"
                  id="character"
                  name="character"
                  value={character}
                  onChange={(e) => setCharacter(e.target.value)}
                >
                  <option className="option-placeholder" value="" disabled>
                    Select your character
                  </option>
                </select>
                <button
                  className="btn"
                  type="button"
                  onClick={handleCalculateCharacter}
                >
                  Calculate
                </button>
              </div>
            </form>
          </div>
          <div className="pob-form">
            <h2>Path of Building Import</h2>
            <form>
              <input
                className="input"
                placeholder="Path of Building code"
                id="pobCode"
                name="pobCode"
                value={pobCode}
                type="text"
                onChange={(e) => setPobCode(e.target.value)}
              />
              <button
                className="btn"
                type="button"
                onClick={handleCalculatePobCode}
              >
                Calculate
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="footer">Developed by MattHub</p>
    </>
  );
}

export default LandingPage;
