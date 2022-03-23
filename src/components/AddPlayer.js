import React from "react";
import { Consumer} from './Context'

const AddPlayer = ()=>  {
    
    const inputValue = React.createRef()
    
    return(
        <Consumer>
                {context=>{
                    // console.log(inputValue)
                    const handleSubmit = (e) =>{
                        e.preventDefault()
                        context.actions.addPlayer(inputValue.current.value)
                        e.currentTarget.reset()
                    }
                    
                    return(
                        
                        <form onSubmit={handleSubmit} >
                            <input 
                                type="text"
                                placeholder='Add player name'
                                ref={inputValue}
                            />
                            <input 
                                type="submit"
                                value='Add player'
                            />
                        </form>

                    )
                }}
            </Consumer>
        )

}

export default AddPlayer