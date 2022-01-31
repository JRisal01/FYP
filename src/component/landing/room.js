import React from 'react'
import Title from './Title'
import '../../scss/landingRoom.css'
import '../../scss/special-card.css'


export default function room() {
    return (
        <>
            <div className=" l-container">
                <Title titel = "Our Rooms" subtitle= "&Suits"/>   
                <div className="roomsInfo"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At venenatis aliquet magna massa molestie. Faucibus sit fusce imperdiet commodo nulla et. Faucibus sit fusce imperdiet commodo nulla et.</p></div>



                <div class="special-card">
                    <div class="special-card__item">
                        <div class="special-card__top">
                            
                        </div>
                        <div class="special-card__buttom">
                            <h3 class="special-card__tital">The Two Sacred Valleys</h3>
                            <p class="special-card__discription">Discover the two magical valleys of Nepal, Kathmandu
                                and Pokhara. Explore the ancient
                                temples, courtyards and bustling markets, before experiencing the breathtaking view…</p>
                            <div class="special-card__button-wrapper">
                                <a href="" class="special-card__button">EXPLORE THE TRIP</a>
                                <hr class="special-card__line" />
                            </div>
                        </div>
                    </div>

                    <div class="special-card__item">
                        <div class="special-card__top">
                           
                        </div>
                        <div class="special-card__buttom">
                            <h3 class="special-card__tital">The Two Sacred Valleys</h3>
                            <p class="special-card__discription">Discover the two magical valleys of Nepal, Kathmandu
                                and Pokhara. Explore the ancient
                                temples, courtyards and bustling markets, before experiencing the breathtaking view…</p>
                            <div class="special-card__button-wrapper">
                                <a href="" class="special-card__button">EXPLORE THE TRIP</a>
                                <hr class="special-card__line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
