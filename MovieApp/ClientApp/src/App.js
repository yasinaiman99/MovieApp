import React from "react";
import { Route, Routes } from "react-router";
//import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import ProtectedRoute from "./component/ProtectedRoute";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App =() => {
    return (
        <div>
            {/*<AuthContextProvider>*/}
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/signIn" element={<Login />}></Route>
                    <Route path="/signUp" element={<SignUp />}></Route>
                    <Route path=":genre" element={<MovieList />}></Route>
                    <Route path="/:genre/:movieId" element={<MovieDetails />}></Route>
                <Route
                path="/account"
                element={
                       <ProtectedRoute>
                            <Account />
                    </ProtectedRoute>
                }>
                </Route>
                </Routes>
                <Footer />
            {/*</AuthContextProvider>*/}
        </div>
    );
}

export default App;
