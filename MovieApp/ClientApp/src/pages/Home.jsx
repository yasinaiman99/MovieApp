import React from "react"
import Main from "../component/Main"
import Row from "../component/Row"
import requests from "../Request"


const Home = () => {

    return (
        <div>
            <Main genre="popular" />
            <Row title="Popular" fetchURL={requests.requestPopular} rowID='2' genre="popular" />
            <Row title="UpComing" fetchURL={requests.requestUpcoming} rowID='1' genre="upcoming" />
            <Row title="Top Rated" fetchURL={requests.requestTopRated} rowID='3' genre="top_rated" />
            <Row title="Trending" fetchURL={requests.requestTrending} rowID='4' genre="popular" />
            <Row title="Horror" fetchURL={requests.requestHorror} rowID='5' />
        </div>
    )
}

export default Home