import React from 'react'
import '../../scss/about.css'
import Title from './Title'

export default function about() {
    return (
        <div className='about'>
            <div className=" l-container">
                <Title titel = "About US" subtitle= ""/>   
                <div className="about_body">
                    <div className="about_title"><p>Feel The Nature With Hotel Paradise</p></div>
                    <div className="about_info"><p>The main aim of the Hotel Paradise is to feel like you are in haven until you are under our roof. Nepal is Rich in mountains, hills, river and beautifuls nature. We make sure you are keept close to the nature so that you can take full adventage of Nepal’s Nature. Whats better than watching beautiful sunsine scean from Nagarkot from your bed and getting the slap of sun when you are in bed. Not only the sunsine, you can also see beautiful mountain range towar your North. </p></div>
                </div>
            </div>
            
        </div>
    )
}
