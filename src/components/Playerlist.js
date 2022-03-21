import React from "react";
import { Consumer } from "./Context";
import Player from "./Player";

function Playerlist(props) {
    return (
        <Consumer>
            {context=>{
                const players = context.players;

                return(
                    <>

                        {players.map( (player, index) =>
                                <Player  
                                removePlayer = {context.removePlayer}
                                changeScore = {context.changeScore}
                                changeName = {context.changeName}
                                max ={context.arrMax1.includes(index) && player.score !==0 ? true : false}
                                name={player.name} 
                                score={player.score}
                                key={player.id}
                                id= {player.id}
                                index = {index}
                            />
                            )}
                    </>
                )
            }}
        </Consumer>
    )

}

export default Playerlist