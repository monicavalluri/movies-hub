import React from 'react';
import './Checkout.css';
import '../results/Card.css';

export default function Checkout({playlist}) {
    return <div className='Checkout-container'>
        <h3>Movies in playlist</h3>
        <div className='Checkout-card-container'>
            {
                playlist.map(movie => 
                    <div className='Card' key={movie.imdbID}>
                        <div className='Card-metadata'>
                            <h4>{movie.Title}</h4>
                            <p>Year: {movie.Year}</p>
                            <p>Type: {movie.Type}</p>
                        </div>
                        <div><img className='Card-image' alt={movie.Title} src={movie.Poster}/></div>
                    </div>
                )
            }
        </div>
        {   <div className='Checkout-footer'>
                My favorite color is Black
            </div>
        }
    </div>
}