import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  VStack,
} from '@chakra-ui/react';
import Axios from 'axios'
import React, { useState }from 'react';

// COMPONENTS
import './components/button-stylesheet.scss';
import { NavBar } from './components/NavBar/NavBar';

// SCENES
import { Players } from './scenes/Players';
import { Stats } from './scenes/Stats';




export const App = () => {

  const [firstName, setFirstName] = useState('');
  const [team, setTeam] = useState('');
  const [handicap, setHandicap] = useState(18);
  const addToList = () => {
    Axios.post("http://localhost:4000/insertplayer", {
      firstName: firstName,
      team: team,
      handicap: handicap,
    })
    console.log(firstName, team, handicap);
  }

  return (
    <div>
    <h1>Input data here</h1>
    <input required className='firstName' placeholder='first name' type='text' 
      onChange={(e) => {
        setFirstName(e.target.value)}}>
    </input>
    <select required className='team' placeholder='team'type='text'
      onChange={(e) => {
        setTeam(e.target.value)}}>
          <option value="USA">USA</option>
          <option value="EUR">Europe</option>
    </select>
    <input required className='handicap' placeholder='handicap'type='number'
      onChange={(e) => {
        setHandicap(e.target.value)}}>
    </input>
    <button onClick={addToList}>Add player to database</button>
    <BrowserRouter>
    <ChakraProvider>
      <VStack h='100vh'>

        <NavBar />
        
          <Routes>
            <Route path='/players' element={<Players />}></Route>
            <Route path='/stats' element={<Stats />}></Route>
          </Routes>
        

      </VStack>
    </ChakraProvider>
    </BrowserRouter>
    </div>
  )
}
export default App;
