import React from 'react';
import './CharacterPage.css';
import Navbar from './Navbar.js';

function ItemBox({ dimesion }) {
  return <div></div>;
}

function EquipmentContainer() {
  return (
    <>
      <div className="div-equip">
        <grid className="equipment-container"></grid>;
      </div>
    </>
  );
}

function CharacterPage() {
  return (
    <>
      <div className="character-page">
        <Navbar />
        <EquipmentContainer />
        <p className="footer">Developed by MattHub</p>
      </div>
    </>
  );
}

export default CharacterPage;
