import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FiChevronsRight } from 'react-icons/fi';

import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID, genre }) => {
    const [movies, setMovies] = useState([]);// Declaring the state for storing movie data
    const navigate = useNavigate();// Getting the current navigation function

    // Fetching movie data from an API using axios and storing it in the movies state
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
            console.log(response.data.results)
        });
    }, [fetchURL]);
    // Function to slide the movie slider to the left
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    // Function to slide the movie slider to the right
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    // Function to navigate to the selected genre page
    const handleClick = () => {
        navigate(`${genre}`)
    }


return (
    <div>
        <div className="flex flex-row items-center">
            <h2 className="text-[#FFFDE3] font-bold md:text-xl p-4 cursor-pointer">{title}</h2>
            {genre ? <FiChevronsRight onClick={handleClick} className="text-white cursor-pointer" /> : null}
        </div>
        <div className="relative flex items-center ml-2 group">
            <MdChevronLeft
                className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={30}
                onClick={slideLeft}
            />
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative break-words'>
                {movies.map((item) => {
                    return (
                        <Movie item={item} genre={genre}></Movie>
                    );
                })}
            </div>
            <MdChevronRight
                className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={30}
                onClick={slideRight}
            />
        </div>
    </div>
);
};

export default Row;
