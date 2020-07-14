import React, {useState} from 'react';
import Search from './component/Search.jsx'
import Results from './component/Results.jsx'
import Popup from './component/Popup'
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
                .then(({data}) => {
                    let results = data.Search;

                    setState(prevState => {
                        return { ...prevState, results: results}
                    })

                })
        }

    }

    const handleInput = e => {
        let s = e.target.value;

        setState(prevState => {
            return { ...prevState, s: s}
        });

        

    }

    const openPopup = id => {
        axios(`${apiURL}&i=${id}`)
            .then(({ data }) => {
                let result = data;
                setState(prevState => {
                    return { ...prevState, selected: result }
                })
            })
    }

    const closePopup = () => {
        setState(prevState => {
            return{
                ...prevState, selected: {}
            }
        })
    }

    return(
        
        <div>
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleInput = {handleInput}
                search={search}/>
                <Results results={state.results}
                openPopup={openPopup}/>
                {(typeof state.selected.Title !== "undefined") ? <Popup selected={state.selected}
                closePopup={closePopup}/>
                : false}
            </main>
        </div>
    )
}