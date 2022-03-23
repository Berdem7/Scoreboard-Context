import React from "react";

const ScoreboardContext = React.createContext()

export class Provider extends React.Component{
  
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
  
  
    maxFinder(){
        const arr = this.state.players.map((e)=>{return e.score});
         this.max = Math.max(...arr);
         this.arrMax1.splice(0,this.arrMax1.length)
        for (let i=0; i<arr.length;i++){
            if(arr[i]==this.max){
                this.arrMax1.push(i)
              }
          }
      
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
  
  changeName = (name, index) =>{
      this.setState(prevState=>{
          const newPlayers = [...prevState.players]
          const newPlayer = {...newPlayers[index]}
        //   const oldName = newPlayers[index].name
          newPlayer.name = name.current.value
          newPlayers[index]=newPlayer;
          console.log(name.current.value);
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
            <>
                <ScoreboardContext.Provider value={{
                    players:this.state.players,
                    actions:{
                        removePlayer:this.removePlayer,
                        changeScore: this.changeScore,
                        changeName:this.changeName,
                        addPlayer:this.handleAddPlayer,
  
                    },
                    arrMax1:this.arrMax1}}>
      
                  {this.props.children}
  
                </ScoreboardContext.Provider>
            </>
        )
    }
  }
  {/* <Player arr={this.arrMax} /> */}

// export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;

