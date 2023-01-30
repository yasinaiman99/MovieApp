import React, { useState, useEffect } from "react";
import requests from "../Request";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// 1. Function component that receives a `props` object as an argument
const Main = (props) => {
    // 2. State hook to store an array of movies, initialized as an empty array
    const [movies, setMovies] = useState([]);
    // 3. Select a random movie from the `movies` array
    const movie = movies[Math.floor(Math.random() * movies.length)];

    // 4. useEffect hook to fetch popular movies from an API
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            // 5. Update the state with the response data
            setMovies(response.data.results);
        });
    }, []);

    // 6. Get the `useNavigate` hook from the `@reach/router` library
    const navigate = useNavigate();

    // 7. Inner component to handle the text overview's read more functionality
    const ReadMore = (text) => {
        // 8. Stringify the text, remove special characters and whitespaces, then slice first 150 characters
        const over = JSON.stringify(text);
        const overview = over.replace(/[^\w\s]/g, "").replace(/(^\s+|\s+$)/g, "").replace(/\s+/g, " ").replace("children", "");
        // 9. State hook to keep track of the read more toggle
        const [isReadMore, setIsReadMore] = useState(true);
        // 10. Function to toggle the read more state
        const toggleReadMore = () => { setIsReadMore(!isReadMore) };

        return (
            <p>
                {isReadMore ? overview.slice(0, 150) : overview}
                {overview.length > 150 &&
                    <span onClick={toggleReadMore} className="text-gray-500 cursor-pointer">
                        {isReadMore ? '...read more' : ' ...show less'}
                    </span>
                }
            </p>
        )
    }

    // 13. Function to handle clicking a movie and navigating to its details page
    const handleClick = () => {
        // 14. Call the `navigate` hook with the URL of the movie's details page
        navigate(`/${props.genre}/${movie.id}`)
    }


    // The main component of the movie display page 
    // Returns the UI with the backdrop image, movie title, release date, and movie overview
        return (
            <div className="w-full h-[70vh] md:h-[600px] text-[#FFFDE3]">
               
                <div className="w-full h-full">
                    
                    <div className="absolute w-full h-[70vh] md:h-[600px] bg-gradient-to-r from-black">
                    </div>
                    
                    <img
                        className="w-full h-[70vh] md:h-full object-cover"
                        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                        alt=""
                    />
                    
                    <div className="absolute w-full top-[20%] p-4 md:p-16">
                        
                        <h1 className="text-2xl md:text-5xl font-bold">{movie?.title} </h1>
                        <div className="my-4">
                           
                            <button onClick={handleClick} className=" border bg-gray-300 text-black border-gray-300 py-2 px-5" >
                                Play
                            </button>
                            
                            <button className="border text-[#FFFDE3] border-gray-300 py-2 px-5 ml-4 ">
                                Watch Later
                            </button>
                        </div>
                        
                        <p className="text-gray-400 text-sm">
                            Released: {movie?.release_date}{" "}
                        </p>
                        
                        <p className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] text-gray-200 text-sm md:text-base mt-2">
                            <ReadMore>
                                {movie?.overview}
                            </ReadMore>
                        </p>
                    </div>
                </div>
            </div>
        );
    };

// Export the Main component
export default Main;
