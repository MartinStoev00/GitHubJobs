import React from 'react'
import './Spinner.css'

export default function Spinner() {
    return (
        <div className="loaderBody">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}
