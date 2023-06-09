import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Good vibes</p>
        <h3>Iphone Store</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" 
           />

        <div>
        <button type="button">{heroBanner.buttonText}</button>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
