import React from 'react'
import propTypes from 'prop-types'
import {Consumer} from './Context'

const Counter =({index})=> {


        return(
            <div className='counter'>
                <Consumer>
                    {(value)=>{
                        const players=value.players;
                        const changeScore = value.actions.changeScore;
                        return(
                            <>
                            <button className="counter-action dicrement" onClick={()=>changeScore(-1, index)}>-</button>
                            <span className='counter-score'>{ players[index].score }</span>
                            <button className="counter-action increment" onClick={()=>changeScore(1, index)}> + </button>
                            </>

                        )
                    }}

                </Consumer>
                </div>
        )

}

Counter.propTypes = {
    index: propTypes.number,
    // score: propTypes.number,
    changeScore: propTypes.func
}

export default Counter