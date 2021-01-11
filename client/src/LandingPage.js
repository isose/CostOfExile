import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LandingPage.css';
import Navbar from './Navbar.js';

function LandingPage() {
  const [account, setAccount] = useState({ accountName: '', characters: [] });
  const [character, setCharacter] = useState('');
  const [pobCode, setPobCode] = useState('');

  useEffect(() => {
    // reset character state when character array is changed
    setCharacter('');
  }, [account.characters]);

  function handleSubmitAccount() {
    if (account.accountName) {
      axios
        .get('/account/characters', {
          params: {
            accountName: account.accountName,
          },
        })
        .then((response) => {
          setAccount({ ...account, characters: response.data });
        })
        .catch((error) => {
          setAccount({ ...account, characters: [] });
          // TODO display detailed error prompt/message
        });
    }
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
                  value={account.accountName}
                  onChange={(e) =>
                    setAccount({ ...account, accountName: e.target.value })
                  }
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
                  <option hidden value="">
                    Select your character
                  </option>
                  {account.characters.map(
                    ({ name, level, class: clazz, league }) => {
                      return (
                        <option key={name} value={name}>
                          {name}: {level} {clazz} {league}
                        </option>
                      );
                    },
                  )}
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
