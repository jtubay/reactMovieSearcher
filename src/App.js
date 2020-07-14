import React, {useState} from 'react';
import Search from './component/Search.jsx'

export default function App() {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    })
    const apiURL = "https://www.omdbapi.com/?apikey=trilogy";

    const handleInput = e => {
        let s = e.target.value;

        setState(prevState => {
            return { ...prevState, s: s}
        });

        console.log(state.s)

    }

    return(
        
        <div>
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleInput = {handleInput}/>
            </main>
        </div>
    )
}