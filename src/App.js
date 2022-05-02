import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../src/Home'
import LegalInfo from '../src/LegalInfo'


const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/legal-info" element={<LegalInfo/>}/>
            </Routes>
        </Router>
    );
}

export default App;
