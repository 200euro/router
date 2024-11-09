import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
 <>
 <section className="hero">
   <div className="container">
      <div className="wrapper">
      <div className="wrapper__hero">
         <img src="/public/img.webp" alt="" />
      </div>

      <div className="wrapper__text">
         <h1>Lorem, ipsum dolor.</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto inventore quam quidem voluptatum eligendi alias!</p>
         <button>Купить</button>
      </div>
      </div>
   

   </div>
 </section>
 
 </>
  )
}

export default Hero