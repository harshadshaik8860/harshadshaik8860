import React from 'react'

function Error({heroName}) {
    if(heroName==="joker"){
        throw new Error("not a hero");
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Error;
