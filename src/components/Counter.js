import React from 'react'
import propTypes from 'prop-types'

class Counter extends React.Component {

    maxFinder(){
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


    render (){

        return(
            <div className='counter'>
                    <button className="counter-action dicrement" onClick={()=>this.props.changeScore(-1, this.props.index)}>-</button>
                    <span className='counter-score'>{ this.props.score }</span>
                    <button className="counter-action increment" onClick={()=>this.props.changeScore(1, this.props.index)}> + </button>
                </div>
        )
    }

}

Counter.propTypes = {
    index: propTypes.number,
    // score: propTypes.number,
    changeScore: propTypes.func
}

export default Counter