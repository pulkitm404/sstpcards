import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Row.css'

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function Row({query}) {
    const apiurl = "https://omdbapi.com/?apikey=dfe6d885";
    const [ movies, setMovies] = useState([]);

    useEffect(() => {
        axios(apiurl + "&s=" +query).then(({ data }) => {
            setMovies(data.Search);
          });
    }, [query])

    const slider = React.createRef();
    return (
        <div className="row">
            {query ? <h2 style={{color:'white'}}>Search Results for "{query}"</h2>: null}
            {query ? 
            
            <div className="postersdiv" ref={slider}>
                <ChevronLeftIcon 
                    style={{
                        cursor:'pointer',
                        position: "absolute", 
                        color: "#FFF", 
                        marginTop:'160px', 
                        fontSize:"3rem", 
                        zIndex:10,
                        background: "rgba(0, 0, 0, 0.466)"
                    }}
                    onClick={() => slider.current.scrollLeft -=300}
                />
                {movies.map(movie => (
                    <img
                        src={movie.Poster}
                        className="poster"
                        alt={movie.Title}
                    />
                 ))}
                 <ChevronRightIcon 
                  style={{
                    cursor:'pointer',
                    position: "absolute", 
                    color: "#FFF", 
                    marginTop:'160px', 
                    fontSize:"3rem", 
                    zIndex:10,
                    background: "rgba(0, 0, 0, 0.466)",
                    right: 5
                }}
                onClick={() => slider.current.scrollLeft +=300}
                 />
            </div>

            : null}
            
        </div>
    )
}

export default Row
