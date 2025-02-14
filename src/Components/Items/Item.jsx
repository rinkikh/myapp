import React from 'react'
import './Item.css'

const Item = (props) => {
    return (
        <div className='Item'>
            <img src={props.image} />
            <p>{props.name}</p>

            <div className='item_prices'>
                <div className='item_price_new'>
                   ${props.new_price}
                </div>
                <div className="item_price_old">
                   ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item