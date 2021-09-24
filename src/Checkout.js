import './Checkout.css'
import Subtotal from './Subtotal.js'
import React, { forwardRef } from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move';


function Checkout() {
    const [{ basket }] = useStateValue();

    const FunctionalArticle = forwardRef((props, ref) => (
        <div ref={ref}>
           <CheckoutProduct 
                                    id={props.id} 
                                    title={props.title} 
                                    price={props.price} 
                                    rating={props.rating}
                                    image={props.image}
                                    />
        </div>
      ));

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                className='checkout__ad'
                src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg' 
                alt='' />
                <div>
                    <h2 className='checkout__title'>{basket?.length > 0 ? 'Your Shopping Basket' : 'Your Shopping Basket is empty'}</h2>
                    <div className='checkout__basket'>
                        {
                            (basket?.length > 0 && 
                                <FlipMove>
                                {basket.map((b) => (
                                   <FunctionalArticle {...b} />
                                ))}
                                </FlipMove>
                            ) 
                        }
                    </div>
                </div>
            </div>
            
            <div className='checkout__right'>
            {basket?.length > 0 && 
                <Subtotal />
            }
            </div>
        </div>
    )
}

export default Checkout
