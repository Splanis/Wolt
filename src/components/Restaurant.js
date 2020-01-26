import React from 'react'

const Restaurant = ({ name, price, image }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <img src={image} style={{width: '500px'}}/>
        </div>
    )
}

export default Restaurant