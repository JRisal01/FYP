import React, { useState } from 'react';
import '../../scss/booking.css'
import '../../scss/dropdown.css'





export default function Dropdown(props) {
    const [count, setCount] = useState(0);  
    const check = props.data
    if (check === "date") {
        return(
            <>
                <div className="booking_check booking_list">
                    <div className="booking_list__info"><p>{props.titel}</p></div>
                            <div className="booking_list_data">
                                <input type="date"></input>
                            </div>
                </div>
        </>
        )
    }

    else if (check === "number") {
        
    
        return(
        <>
                <div className="booking_check booking_list">
                    <div className="booking_list__info"><p>{props.titel}</p></div>
                            <div className="booking_list_data">
                                <button className="dataChange" onClick={() => setCount(count + 1)}></button>
                                <p className='dataNumber'> {count} </p>
                                <button className="dataChange" onClick={() => setCount(count - 1)}></button>
                            </div>
                </div>
        </>
        )
    } 
    
    else {
        alert.log("error")
    }
}
