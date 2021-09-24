import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
        <div className='home__container'>
            <img
            className='home__image' 
            src='https://m.media-amazon.com/images/I/61tX6L542kL._SX3000_.jpg' alt=''
            />
            <div className='home__row'>
                {/* Product */}
                <Product
                id='101'  
                title='Heartbeat of a Gamer 2 Adult Hoodie' 
                price={29.99} 
                rating={4} 
                image='https://m.media-amazon.com/images/I/616PbyOB4dL._AC_UL320_.jpg' />
                
                {/* Product */}
                <Product 
                id='102'
                title='Amazon Basics Ergonomic Gaming Chair with Bluetooth Speakers and Built-in Microphone, Height Control Button - Green' 
                price={128.12} 
                rating={5} 
                image='https://m.media-amazon.com/images/I/71NAKYGsRzS._AC_SL1500_.jpg' />
            </div>
            <div className='home__row'>
                {/* Product */}
                <Product
                id='103' 
                title='Convenience Concepts Tucson - Side table with electric lid, Wood' 
                price={81.99} 
                rating={5} 
                image='https://m.media-amazon.com/images/I/71jB2pf9BVL._AC_SL1500_.jpg' />
                {/* Product */}
                <Product 
                id='104'
                title='Amazon Basics 12 Modern Wall Clock, Black' 
                price={22.99} 
                rating={4} 
                image='https://m.media-amazon.com/images/I/71tbGT73gcL._AC_SL1500_.jpg'/>
                {/* Product */}
                <Product 
                id='105' 
                title='Apple iPhone X - Parent' 
                price={363.00} 
                rating={4} 
                image='https://m.media-amazon.com/images/I/81SSw14XZHL._AC_SL1500_.jpg' />
            </div>
            <div className='home__row'>
                {/* Product */}
                <Product 
                id='106'
                title='TCL 75S535, model 2021 - 75 inches' 
                price={1199.99} 
                rating={5} 
                image='https://m.media-amazon.com/images/I/91tMNAWWsPL._AC_SL1500_.jpg' />
            </div>
        </div>
        </div>
    )
}

export default Home
