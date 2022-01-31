import React from 'react'
import '../../scss/bannerDetail.css'

export default function BannerDetails() {
    return (
        <>
            <div className="bannerDetails l-container">
                <p className='bannerDetails__text bannerDetails__text-regular'>Welcome to</p>
                <p className='bannerDetails__text bannerDetails__text-bold'>Hotel Paradise</p>
                <p className='bannerDetails__text bannerDetails__text-light'>Experience the Havenly World</p>
            </div>
        </>
    )
}
