import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Welcome} from './components/Welcome/Welcome';
import {Skills} from './components/Skills/Skills';

function App() {
    return (
        <div className="App">
            <Header/>
            <Welcome/>
            <Skills />
        </div>
    );
}

export default App;
