import React from 'react'
import '../../scss/title.css'

export default function Title(props) {
    if (props.subtitle == ''){
        return(
            <div>
                <div className="title"><p>{props.titel}</p></div>
                <div className="no_subtitle"><hr></hr> </div>
            </div>
        )
    }
    return (
        <div>
            <div className="title"><p>{props.titel}</p></div>
            <div className="subtitle"><hr></hr><p>{props.subtitle}</p></div>
        </div>
    )
}
