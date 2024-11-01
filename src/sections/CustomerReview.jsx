import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReview = () => {
  return (
    <section className='max-container'>
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className='
        text-coral-red'>Customer </span>Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Here genuine stories from our satisfied customer about their exceptional experiences with us.
      </p>

      {/* the review section */}
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL = {review.imgURL}
            customerName = {review.customerName}
            rating = {review.rating}
            feedback = {review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview