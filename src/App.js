import React, {useState} from 'react';
import Search from './component/Search.jsx'
import axios from 'axios'

export default function App() {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    })
    const apiURL = "https://www.omdbapi.com/?apikey=trilogy";

    const search = e => {
        if(e.key === "Enter"){
            axios(`${apiURL}&s=${state.s}` )
                .then(data => {
                    console.log(data)
                })
        }

    }

    const handleInput = e => {
        let s = e.target.value;

        setState(prevState => {
            return { ...prevState, s: s}
        });

        

    }

    return(
        
        <div>
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleInput = {handleInput}
                search={search}/>
            </main>
        </div>
    )
}