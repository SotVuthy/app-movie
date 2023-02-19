import { Routes , Route } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Series from './Pages/Series';
import TVShow from './Pages/TV Show';

import './index.css'

import Application from './Components/Foot-child/Application';
import Term from './Components/Foot-child/Term';
import Contact from './Components/Foot-child/Contact';
import AboutUS from './Components/Foot-child/AboutUS';

import Login from './Pages/Login';
import CreateAcount from './Pages/CreateAcount';
import Watchpage from './Components/Card/Watchpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<Home/>}></Route>
        <Route path='Movie' element={<Movie/>}></Route>        
        <Route path='Series' element={<Series/>}></Route>
        <Route path='TVShow' element={<TVShow/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='CreateAcount' element={<CreateAcount/>}></Route>

        <Route path='Application' element={<Application/>}></Route>        
        <Route path='Term' element={<Term/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='About Us' element={<AboutUS/>}></Route>

        <Route path='Watchpage' element={<Watchpage/>}></Route>

      </Route>
    </Routes>
  );
}

export default App;
