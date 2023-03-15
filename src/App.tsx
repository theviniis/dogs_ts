import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components/';
import { Home, Login } from './pages';
import { DogsProvider } from './providers';
import { GlobalStyle } from './style';

function App() {
  return (
    <DogsProvider>
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <GlobalStyle />
      </>
    </DogsProvider>
  );
}

export default App;
