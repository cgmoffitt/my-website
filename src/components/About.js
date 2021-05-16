import React from 'react'
import ChrisImage from '../images/chris-image.svg'
import AboutHeader from './AboutHeader'

export default function About(){

  return (
    <div className="background absolute inset-0 z-0 about-page">
      <img src={ChrisImage} alt="Chris Image"></img>
      <AboutHeader />
    </div>
    
  )

}