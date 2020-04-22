import React, { useState } from 'react'
// import Picture from './Picture'


const Card = ({jeff, upCount}) => {

    const [isFlipped, setIsFlipped] = useState(false)

    const flipCard = () => {
        toggleFlip()
    }

    const toggleFlip = () => {
        setIsFlipped(!isFlipped) 
    }

    return (
        <div className="scene scene--card" >
            <div className={isFlipped ? "card is-flipped" : "card"} onClick={flipCard} onMouseOut={() => setIsFlipped(false)}>
                <div className="card__face card__face--front">Jeff?</div>
                <div className="card__face card__face--back"><img src={jeff} alt="jeff"></img></div>
            </div>
        </div>
    )
}

export default Card