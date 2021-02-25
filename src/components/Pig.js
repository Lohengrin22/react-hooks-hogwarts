import React, {useState} from "react"


function Pig({name, image, specialty, greased, weight, highestMedalAchieved}){
    const [pigDetail, setPigDetail] = useState("")
    
    function handleCardClick(){
       setPigDetail((pigDetail) => !pigDetail)
    }

    const greasedStr = greased.toString()
    const pigDetailArr = 
       ( <div>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>Greased? {greasedStr}</p>
            <p>Highest Medal Achieved: {highestMedalAchieved}</p>
            </div>
        )
    
 
    return(
        <div className="eight wide column">
            <div 
            className="ui card"
            onClick={handleCardClick}>
                <h2>{name}</h2>
                <img src={image} alt={name} />
                <div>{pigDetail ? pigDetailArr : null}
                </div>
            </div>
        </div>
    )
}

export default Pig;