import React, { useEffect } from 'react'

const VinInfo = ({ info }) => {

    const { year, make, model, manufacturer, engine, trim, transmission } = info

    return (
        <div className="vinInfo">
            <p>Year: <span>{year}</span></p>
            <p>Make: <span>{make}</span></p>
            <p>Model: <span>{model}</span></p>
            <p>Manufacturer: <span>{manufacturer}</span></p>
            <p>Engine: <span>{engine}</span></p>
            <p>Trim: <span>{trim}</span></p>
            <p>Transmission: <span>{transmission}</span></p>
        </div>
    )
}

export default VinInfo;