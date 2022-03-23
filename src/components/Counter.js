import React from 'react'
import propTypes from 'prop-types'
import {Consumer} from './Context'

const Counter =({index})=> {

  function maxFinder(){
        const arr = this.state.players.map((e)=>{return e.score});
      //    arr = props.score
      //   console.log(arr)
      //   console.log(props.score)
        const max = Math.max(...arr);
        let arrMax1 = [];
        for (let i=0; i<arr.length;i++){
            if(arr[i]==max){
                arrMax1.push(i)
              }
          }
          console.log(arrMax1)
          this.setState({
              arrMax: arrMax1
          })
        console.log(this.state.arrMax);
      //   console.log(arrMax1);
      //   console.log(max);
        
    }



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