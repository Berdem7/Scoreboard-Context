import React from 'react'
import Player from './components/Player'
import Header from './components/Header'
import AddPlayer from './components/AddPlayer'
import './App.css';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import ChangeName from './components/ChangeName';
import Playerlist from './components/Playerlist';
import { Provider} from './components/Context'

class App extends React.Component{
  
  state = {
      players: [
          {
              name: 'Enkhtuvshin',
              score: 0,
              id: 1
          },
          {
              name: 'Dulam',
              score: 0,
              id: 2
          },
          {
              name: 'Jambal',
              score: 0,
              id: 3
          },
          {
              name: 'Jambal1',
              score: 0,
              id: 4
          },
          {
              name: 'Jambal2',
              score: 0,
              id: 5
          }
      ],
  }

  max =0;
  arrMax1 = [];


//   componentDidUpdate(){
//       this.maxFinder()
//   }

  maxFinder(){
      const arr = this.state.players.map((e)=>{return e.score});
    //    arr = props.score
    //   console.log(arr)
    //   console.log(props.score)
       this.max = Math.max(...arr);
       this.arrMax1.splice(0,this.arrMax1.length)
      for (let i=0; i<arr.length;i++){
          if(arr[i]==this.max){
              this.arrMax1.push(i)
            }
        }
        // console.log(arrMax1)
        // this.setState({
        //     arrMax: max
        // })
    //   console.log(this.state.arrMax);
    //   console.log(arrMax1);
    //   console.log(this.max);
    
}


lastPlayerID = this.state.players.length - 1
playersId = this.state.players[this.lastPlayerID].id

inputValue = React.createRef()


changeScore = (delta, index)=> {
    this.setState( prevState => {
        const updatedPlayers = [...prevState.players]
        const updatedPlayer = {...updatedPlayers[index]}
        
        updatedPlayer.score += delta
        
        updatedPlayers[index] = updatedPlayer
        
        return {
            players: updatedPlayers
        }
    } )
    // this.maxFinder()
    // console.log(this.state.arrMax)
}

removePlayer = (paraID) => {
    this.setState( prevState => {
        return {
            players: prevState.players.filter(p => p.id != paraID)
        }
    })
}

handleAddPlayer = (name) => {
    this.setState({
        players: [
            ...this.state.players,
            {
                name: name,
                score: 0,
                id: this.playersId += 1
            }
        ]
    })
}

stateChange = (e) =>{
    this.setState({
        value: e.target.value
    })
}

changeName = (index, event) =>{
    this.setState(prevState=>{
        const newPlayers = [...prevState.players]
        const newPlayer = {...newPlayers[index]}
        // newPlayer.name = "Hello my name is"
        // console.log(newPlayers[index])
        const oldName = newPlayers[index].name
        newPlayer.name =                 <input 
        type="text"
        // onChange={this.stateChange}
        // value={newPlayer.name}
        placeholder={oldName}
        ref={this.inputValue}

        
        
    />
        // if(newPlayer.name = ""){
        //     newPlayer.name = {oldName}
        // } else {
            
        // }
        newPlayers[index] = newPlayer
        console.log(this.state.players )
        event.preventDefault();

        return {
            players: newPlayers
        }
    })
    // console.log(this.state.players)
}

render(){
    // console.log(this.state.players)
    //   console.log()
    this.maxFinder()
    // console.log(this.arrMax1)

      return(
          <div className="scoreboard">
              <Provider value={{
                  players:this.state.players,
                  removePlayer:this.removePlayer,
                  changeScore: this.changeScore,
                  changeName:this.changeName,
                  addPlayer:this.handleAddPlayer,
                  arrMax1:this.arrMax1}}>
    
                <Header 
                    title='Scoreboard' 
                    // totalPlayers={this.state.players.length} 
                    // players={this.state.players}
                />
                    <Playerlist 
                        // removePlayer = {this.removePlayer}
                        // changeScore = {this.changeScore}
                        // changeName = {this.changeName}
                        // arrMax1 = {this.arrMax1}
                        // max ={this.arrMax1.includes(index) && player.score !==0 ? true : false}
                    />
                    <AddPlayer />

              </Provider>
          </div>
      )
  }
}
{/* <Player arr={this.arrMax} /> */}

export default App;

