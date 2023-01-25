import React from 'react'

function Searchbox(props) {
    console.log(props)
    return (
        <div>
            <input type="search" className="search" placeholder={props.placeholder} onChange={props.handleChange}/>
        </div>
    )
}

export default Searchbox
