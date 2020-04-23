import React, { useState } from 'react'
// import Picture from './Picture'


const Card = ({jeff, upCount, win}) => {

    const [isFlipped, setIsFlipped] = useState(false)

    const flipCard = () => {
        upCount()
        setIsFlipped(!isFlipped)
        win && win()
    }

    return (
        <div className="scene scene--card" >
            <div className={isFlipped ? "card is-flipped" : "card"} onClick={flipCard} onMouseOut={() => setTimeout(() => setIsFlipped(false), 500)}>
                <div className="card__face card__face--front">Jeff?</div>
                <div className="card__face card__face--back"><img src={jeff} alt="jeff"></img></div>
            </div>
        </div>
    )
}

export default Card