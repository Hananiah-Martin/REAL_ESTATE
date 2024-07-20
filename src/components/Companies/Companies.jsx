import React from 'react'
import './Companies.css'
import company1 from '../Companies/realty.png'
import company2 from '../Companies/equinix.png'
import company3 from '../Companies/prologis.png'
import company4 from '../Companies/tower.png'
function Companies() {
  return (
    <section className="c-wrapper">
        <div className="paddings innwerWidth flexCenter c-container">
            <img src={company1} alt="asdf" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
            <img src={company4} alt="" />
        </div>
    </section>
  )
}

export default Companies
