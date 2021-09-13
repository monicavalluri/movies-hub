import React, {useState} from 'react';
import Card from './Card';
import './Results.css';

export default function Results({searchData, checkoutPlaylist}) {
    const [playlist, setPlaylist] = useState([])

    const addToPlaylist = (movie) => {
        updatePlaylist(movie);
    }

    const removeFromPlaylist = (movie) => {
        const updatedPlaylist = playlist.filter(mov => mov.imdbID !== movie.imdbID)
        setPlaylist([...updatedPlaylist])
    }

    const updatePlaylist = (movie) => {
        if(!inPlaylist(movie)) {
            playlist.push(movie)
            setPlaylist([...playlist])
        }
    }

    const inPlaylist = (movie) => {
        return playlist.find(mov => mov.imdbID === movie.imdbID)
    }

    return <>
    {
        searchData.map(movie => 
        <Card 
            movie={movie} 
            key={movie.imdbID} 
            addToPlaylist={addToPlaylist}
            removeFromPlaylist={removeFromPlaylist} inPlaylist={inPlaylist(movie)}>
        </Card>)
    }
    {
        (playlist.length > 0) && 
        <div className='Results-checkout'>
            <button className='Checkout-button' onClick={() => checkoutPlaylist(playlist)}>
                Checkout Playlist ({playlist.length})
            </button>
        </div>
    }
    </>
}