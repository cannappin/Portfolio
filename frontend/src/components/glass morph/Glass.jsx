import React from 'react'
import './glass.css'
import photo from '../../assets/images/photo.jpg'
import Tilt from 'react-vanilla-tilt'




const glass = () => {
  return (
    <div className='section'>
      <Tilt className="box" options={{ speed:400, max: 15, glare: true }}>
          <div className="elements bg"></div>
          <div className="elements imgBx">
            <img src={photo} alt="photo" />
          </div>
          <div className="elements name">
            <h2>Gogulavasan</h2>
          </div>
          <div className="elements content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde rerum recusandae, delectus temporibus libero dolor magnam omnis</p>
          </div>
          <div className="card"></div>

      </Tilt>
    </div>
  )
}

export default glass