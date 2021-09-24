import StarRateIcon from '@material-ui/icons/StarRate';
import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img 
            className='checkoutProduct__image' 
            src={image}
            alt=''  
            />
            <div className='checkoutProduct__info'>
                <p>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                { 
                    (rating > 0 &&
                <div className='checkoutProduct__rating'>
                    { Array(rating).fill().map((_) => (
                            <StarRateIcon style={{'color': 'rgb(218, 218, 0)'}} />
                    ))}
                </div> )
                }

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
