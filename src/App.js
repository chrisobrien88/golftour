import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  VStack,
} from '@chakra-ui/react';

// COMPONENTS
import './components/button-stylesheet.scss';
import { NavBar } from './components/NavBar/NavBar';

// SCENES
import { Players } from './scenes/Players';
import { Stats } from './scenes/Stats';

export const App = () => {
  return (
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

  )
}
export default App;
