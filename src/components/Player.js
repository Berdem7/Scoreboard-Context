import React from 'react'
import Counter from './Counter'
import propTypes from 'prop-types'
import Crown from './Crown'
import { Consumer} from './Context'

class Player extends React.Component {

    state = {
        // id:this.props.id,
        // name:this.props.name
    }
    // // const arr = props.arr.map((e)=>{return e.score});
    // const arr = props.score
    // console.log(arr)
    // console.log(props.score)
    // const max = Math.max(...arr);
    // let arrMax = [];
    // for (let i=0; i<arr.length;i++){
    //     if(arr[i]==max){
    //         arrMax.push(i)
    //     }
    // }
    // console.log(arrMax);

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

    
    render(){
    // console.log(this.props.max);
    // console.log(this.props.score);

    return(
        <div className="player">
            <div onClick={(event)=>this.props.changeName(this.props.index, event)} className="player-name">
                <button onClick={() => this.props.removePlayer(this.props.id)} className="remove-player">✖</button>
            
            <Crown number={this.props.max ? "is-high-score" : null} />
                {this.props.name}
            </div>
            <Counter index={this.props.index} score= {this.props.score} changeScore = {this.props.changeScore}/>
        </div>
    )
}
    }


export default Player


