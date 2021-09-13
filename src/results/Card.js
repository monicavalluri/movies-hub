import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        const {
            movie, 
            addToPlaylist, 
            removeFromPlaylist, 
            inPlaylist
        } = this.props;

        return (
            <div className='Card'>
                <div>
                    <div className='Card-metadata'>
                        <h4>{movie.Title}</h4>
                        <p>Year: {movie.Year}</p>
                        <p>Type: {movie.Type}</p>
                    </div>
                    {
                        !inPlaylist && 
                        <div className='Card-actions'>
                            <button className='add-to-playlist' onClick={() => addToPlaylist(movie)}>
                                Add to Playlist
                            </button>
                        </div>
                    }
                    {
                        inPlaylist && 
                        <div className='Card-actions'>
                            <p>Added to playlist</p>
                            <button className='add-to-playlist' onClick={() => removeFromPlaylist(movie)}>
                                Remove from playlist
                            </button>
                        </div>
                    }
                </div>
                <div><img className='Card-image' alt={movie.Title} src={movie.Poster}/></div>
            </div>
        )
    }
}

export default Card