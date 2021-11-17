import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import BiscoitoInput from './biscoito';

function App() {
  return (
    <ChakraProvider>
      <BiscoitoInput/>
    </ChakraProvider>
  )
}

export default App;
