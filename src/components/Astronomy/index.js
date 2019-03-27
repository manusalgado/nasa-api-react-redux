import React from 'react'


const Astronomy = (props) => {
    console.log(props.astronomy);
    
    return (
        <div>
            <p>{props.astronomy.astronomy.copyright}</p>
        </div>
    )
}

export default Astronomy