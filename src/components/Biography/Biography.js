import React from 'react'

function Biography(props) {
    let { artistData } = props
    
    return (
        <div className="bio">
            {artistData.artists[0].strBiographyEN}
        </div>
    )
}

export default Biography