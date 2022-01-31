import React from 'react'
import '../../scss/booking.css'
import Dropdown from './Dropdown'

export default function Booking() {
    return (
        <>
            <div className="booking flex">
                <Dropdown titel = "CHECK-IN" data= "date" value = ""/>
                <Dropdown titel = "CHECK-OUT" data= "date" value = ""/>
                <Dropdown titel = "Adult" data= "number" value = ""/>
                <Dropdown titel = "Child" data= "number" value = ""/>
                <button>Check Availability</button>
            </div>
        </>
    )
}
