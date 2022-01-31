import React from 'react'
import '../../scss/banner.css'
import Nav from './Nav'
import BannerDetails from './BannerDetails'

export default function Banner() {
    return (
        <>
            <div className="banner flex-col">
                <Nav />
                <BannerDetails />
            </div>
        </>
    )
}

