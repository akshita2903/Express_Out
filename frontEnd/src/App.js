import logo from './logo.svg';
import './App.css';
import{Box} from '@material-ui/core';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Puri_post_dikhane_wala from './Components/Post_wala/Puri_post_dikhane_wala';
import Create_Wali from './Components/Post_wala/Create_Wali';
import Update from './Components/Post_wala/Update';
import About from './Components/HomePage/About'
import Login from './Components/Authentication/Login'

import SignUp from './Components/Authentication/SignUp'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   
   <Box style={{margin :64}}></Box>
   <Routes>
     <Route exact path="/" element={ <HomePage/> } ></Route>
   <Route path='details' element={<Puri_post_dikhane_wala/>}></Route>
   <Route path='create' element={<Create_Wali/>}></Route>
   <Route path='/update' element={<Update/>}></Route>
   <Route path='/about' element={<About/>}> </Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/signup' element={<SignUp/>}></Route>
   {/* <Puri_post_dikhane_wala/> */}
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
