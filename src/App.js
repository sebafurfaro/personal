import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import { BackgroundShape } from './components/BackgroundShape';

export const App = () => {

  return (
    <div className="App relative">
      <BackgroundShape />
      <BrowserRouter>
        <Routes>
          <Route element={ <Header /> }>
            <Route index element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/work" element={ <Works /> } />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
