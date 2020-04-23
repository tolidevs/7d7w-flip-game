import React from 'react';

const Winner = ({ handleClose, show, count }) => {
    const tries =  count === 1 ? 'one try' : `${count} tries`

    return (
        <div className={show ? "modal display-block" : "modal display-none"} onClick={handleClose}>
            <section className="modal-main">
                <h1>WINNER!!!</h1>
                <h2>You found Jazzy Jeff after {tries}!</h2>
            </section>
        </div>
    );
};

export default Winner