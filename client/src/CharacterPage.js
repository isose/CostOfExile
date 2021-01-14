import React from 'react';
import './CharacterPage.css';
import Navbar from './Navbar.js';

function ItemBox(props) {
  return <div className={props.className + ' unique-color'}></div>;
}

function EquipmentContainer() {
  return (
    <>
      <div className="div-equip">
        <grid className="equipment-container">
          <ItemBox className="main-hand-weapon" />
          <ItemBox className="off-hand-weapon" />
          <ItemBox className="helmet" />
          <ItemBox className="chestplate" />
          <ItemBox className="belt" />
          <ItemBox className="right-ring" />
          <ItemBox className="left-ring" />
          <ItemBox className="amulet" />
          <ItemBox className="gloves" />
          <ItemBox className="boots" />
        </grid>
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
