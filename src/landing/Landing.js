import React, {useState} from 'react';
import Results from '../results/Results';
import Checkout from '../checkout/Checkout';
import './Landing.css';

export function Landing(props) {
    const APIKey = '5e8f875f'
    const baseURL = `https://www.omdbapi.com/?apikey=${APIKey}&`

    const [name, setName] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [error, setError] = useState('')
    const [checkout, setCheckout] = useState(false)
    const [playlist, setPlaylist] = useState([])
    const [totalResults, setTotalResults] = useState(0)

    const getMovies = async(searchText) => {
        const searchUrl = `${baseURL}s=${searchText}`
        try{
            const response = await fetch(searchUrl);
            const {Response, Search, Error, totalResults} = await response.json();
            
            setShowResults(Response.toLowerCase() === 'true')
            setSearchData(Search || [])
            setError(Error || '')
            setTotalResults(totalResults || 0)

        } catch(error) {
            console.error(`Error fetching movies list: ${error}`);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        getMovies(name)
    }

    const checkoutPlaylist = (playlist) => {
        setCheckout(true)
        setPlaylist(playlist)
    }
    
    return checkout ?
            <Checkout playlist={playlist}></Checkout>
        :
            (<div className='App-landing'>
                <form onSubmit={handleSubmit} className='Landing-form'>
                    <input 
                        type='text'
                        value={name}
                        placeholder='Search for movies' 
                        className='Landing-input'
                        onChange={event => setName(event.target.value)}/>
                    <input type='submit' value='Search' className='Landing-search'/>
                </form>
                {
                    showResults && 
                    <div className='Landing-results-container'>
                        <p>Showing {searchData.length} of {totalResults} results</p>
                        <div className='Landing-results'>
                            <Results searchData={searchData}
                                    checkoutPlaylist={checkoutPlaylist}
                                    totalResults={totalResults}></Results>
                        </div>
                    </div>
                }
                {
                    !showResults && <div>{error}</div>
                }
            </div>)
        
   
}

export default Landing;