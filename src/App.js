import React from 'react'
// import Player from './components/Player'
import Header from './components/Header'
import AddPlayer from './components/AddPlayer'
import './App.css';
// import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
// import ChangeName from './components/ChangeName';
import Playerlist from './components/Playerlist';
import { Provider} from './components/Context'

const App =()=>{
    return(
        <div className="scoreboard">
            <Provider >
                <Header />
                <Playerlist />
                <AddPlayer />
            </Provider>
        </div>
    )
}



export default App;

