import React from 'react'

const Product = (props) => {
    return (
        <div>
        <img alt='img' src={props.img} />
        <h3 >{props.name} </h3>
        <h3>{props.price} </h3>
        </div>
    )
}
export default Product
