import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img 
        className='home__image'
        src='https://png.pngtree.com/template/20211025/ourmid/pngtree-cross-border-e-commerce-amazon-overseas-simple-fashion-backpack-travel-banner-image_661109.jpg' alt='' />
        <div className='home__row'>
          {/* Products go here*/}
          <Product 
          id="12345"
          title="The Lean Start up: How COnstsnt Innovation Creates Radically Successful Businesses Paperabck"
          price={11.78}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          
          />
             <Product 
          id="12345"
          title="The Lean Start up: How COnstsnt Innovation Creates Radically Successful Businesses Paperabck"
          price={11.78}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          
          />
             <Product 
          id="12345"
          title="The Lean Start up: How COnstsnt Innovation Creates Radically Successful Businesses Paperabck"
          price={11.78}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          
          />
        </div>
        <div className='home__row'>
          {/* Products go here*/}
          <Product 
          id="12345"
          title="The Lean Start up: How COnstsnt Innovation Creates Radically Successful Businesses Paperabck"
          price={11.78}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          
          />
             <Product 
          id="12345"
          title="The Lean Start up: How COnstsnt Innovation Creates Radically Successful Businesses Paperabck"
          price={11.78}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          
          />
        </div>
        <div className='home__row'>
          {/* Products go here*/}
          <Product 
          id="12345"
          title="The Lean Start up: How COnstsnt Innovation Creates Radically Successful Businesses Paperabck"
          price={11.78}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          
          />
        </div>

      </div>
    </div>
  )
}

export default Home