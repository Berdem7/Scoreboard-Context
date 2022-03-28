import React from 'react'
import Counter from './Counter'
import Crown from './Crown'
import { Consumer} from './Context'

class Player extends React.Component {

    state = {
        index:this.props.index,
        name:this.props.name,
        disabled:true
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
    inputValue = React.createRef();

    maxFinder(){
        const arr = this.state.players.map((e)=>{return e.score});
      //    arr = props.score
      //   console.log(arr)
      //   console.log(props.score)
        const max = Math.max(...arr);
        let arrMax1 = [];
        for (let i=0; i<arr.length;i++){
            if(arr[i]===max){
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

    handleDisabled(e){
        // this.setState({disabled:!this.state.disabled});
        e.target.disabled = false
        e.target.focus()
        console.log(e)
    }

    
    render(){
    // console.log(this.props.max);
    // console.log(this.props.score);

    return(
        <div className="player">
            <Consumer>
                {context=>{
                    const handleSubmit =(e)=>{
                        e.preventDefault()
                        // this.setState({disabled:!this.state.disabled});
                        console.log(this.state.disabled)
                        console.log(this.inputValue.current.value)
                        // value.preventDefault()
                        context.actions.changeName(this.inputValue,this.state.index)
                        // e.currentTarget.reset()
                        console.log(e.target.children[2].children[0])
                        e.target.children[2].children[0].disabled = true
                        
                    }

                    return(
                    <>
                    <div  className="player-name">
                     <form onSubmit={handleSubmit}>
                        <button onClick={() => context.actions.removePlayer(context.players.id)} className="remove-player">✖</button>
                    
                    <Crown number={this.props.max ? "is-high-score" : null} />
                    <span onClick={this.handleDisabled}>
                      <input  type="text" placeholder={context.players[this.state.index].name} disabled={(this.state.disabled)? "disabled" : ""} onBlur={e=>e.target.disabled=true} ref={this.inputValue}>
                      </input>  

                    </span>

                     </form>
                      
                    </div>
                    <Counter index={this.state.index} />
                    </>

                    )
                }}
            </Consumer>
        </div>
    )
}
    }


export default Player


