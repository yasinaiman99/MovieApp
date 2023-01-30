import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Movie from "../component/Movie";


const MovieList = () => {
    const params = useParams();
    const key = process.env.REACT_APP_IMDB_API_KEY;


    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(page);
    }, [page]);


    const fetchData = async (pageNum) => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${params.genre}?api_key=${key}&language=en-US&page=${pageNum}`
            )
            .then((response) => {
                setMovies((prevstate) => [...prevstate, ...response.data.results]);
            })
            .catch((error) => {
                console.log(error);// Define the MovieList component using the functional component syntax
                const MovieList = () => {
                    // Access the parameters passed in the URL using useParams hook
                    const params = useParams();

                    // Get the value of the REACT_APP_IMDB_API_KEY environment variable
                    const key = process.env.REACT_APP_IMDB_API_KEY;

                    // Use the useState hook to set up the state for the movies array and the page number
                    const [movies, setMovies] = useState([]);
                    const [page, setPage] = useState(1);

                    // Use the useEffect hook to fetch data from the movie database API when the component is first rendered and whenever the page number changes
                    useEffect(() => {
                        fetchData(page);
                    }, [page]);

                    // Define the fetchData function to retrieve the data from the movie database API using axios
                    const fetchData = async (pageNum) => {
                        axios
                            .get(
                                `https://api.themoviedb.org/3/movie/${params.genre}?api_key=${key}&language=en-US&page=${pageNum}`
                        )
                            .then((response) => {
                                // Update the state of the movies array with the newly fetched data using the setMovies function
                                setMovies(prevstate => [...prevstate, ...response.data.results]);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    };

                    // Log the current value of the movies array in the console for debugging purposes
                    console.log(movies)

                    // Define the loadMore function to increment the page number when it is called
                    const loadMore = () => {
                        setPage(prevstate => prevstate + 1);
                    };
                };
            });
    };


    console.log(movies)

    const loadMore = () => {
        setPage((prevstate) => prevstate + 1);
    };

    return (
        <div>
            <div className="mx-auto py-10 px-6 max-w-[90%]">
                <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
                    {movies.map((item) => (
                        <Movie item={item} ></Movie>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-10">
                    <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded " onClick={loadMore} disabled={page > 15 ? true : false}>
                        Load More
                    </button>

                </div>
            </div>
        </div>
    );
};

export default MovieList;
