import React from 'react';
import Jazzy from './images/jazzy-jeff.jpg'

const Winner = ({ handleClose, show, count }) => {
    const tries =  count === 1 ? 'one try' : `${count} tries`

    return (
        <div className={show ? "modal display-block" : "modal display-none"} onClick={handleClose}>
            <section className="modal-main">
                <h1>WINNER!!!</h1>
                <img src={Jazzy} alt="DJ Jazzy Jeff"></img>
                <h2>You found Jazzy Jeff after {tries}!</h2>
            </section>
        </div>
    );
};

export default Winner