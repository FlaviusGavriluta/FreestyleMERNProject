import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MovieSearchResults } from "./components/MovieSearchResults";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieSearchResults />} />
        </Routes>
    );
};

export default App;