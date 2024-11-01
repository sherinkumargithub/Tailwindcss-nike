import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    // here this section contain the sepecial offer text and image same like previous and here the image will appear first in web view and last in mobile view using the flex-col-reverse
    <section
      className='flex justify-center items-center flex-wrap max-xl:flex-col-reverse gap-10 max-container'
    >
      <div className="flex-1">
        <img 
          src= {offer} 
          alt="offer img"
          width={773}
          height={687}
          className='object-contain w-full' 
        />
      </div>

      {/* now the text section contain button and article*/}
      <div 
        className="flex flex-1 flex-col"
      >
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
         <span className='text-coral-red'>Special </span> Offer
        </h2>

        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your expirience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a relam of possiilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label ="Shop now" iconURL ={arrowRight}/>
          <Button 
            label ="Learn more" 
            backgroundColor = "bg-white"
            borderColor = "border-slate-gray"
            textColor = "text-slate-gray"
            // now pass this style we defined in button component
          />
        </div>
      </div>

    </section>
  ) 
}

export default SpecialOffer