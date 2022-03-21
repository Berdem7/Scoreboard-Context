import React from 'react'
import Stats from './Stats'
import Stopwatch from './Stopwatch'
import propTypes from 'prop-types'

const Header = (props)=>{
    return(
        <header>
            <Stats players={props.players}/>
            <h1>Scoreboard</h1>
            <Stopwatch />
        </header>
    )
}

// Header = {
//     players : propTypes.arrayOf(propTypes.shape({
//         name: propTypes.string,
//         score: propTypes.number,
//         id: propTypes.number
//     }))
// }

export default Header