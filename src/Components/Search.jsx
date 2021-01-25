import React, { useState } from 'react'

const Search = ({ searchVin }) => {
    const [vin, setVin] = useState('')


    return (
        <div className="search ">
            <input onChange={e => setVin(e.target.value)} />
            <button onClick={() => searchVin(vin)}>Search!</button>
        </div>
    )
}

export default Search