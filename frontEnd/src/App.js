
import './App.css';
import React from 'react';
import{Box} from '@material-ui/core';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import ContentDetail from './Components/MakeOrShowContent/ContentDetail';
import Create_Wali from './Components/MakeOrShowContent/Create_Wali';

import About from './Components/HomePage/About'
import Login from './Components/Authentication/Login'
import OwnContent from './Components/HomePage/OwnContent';
import SignUp from './Components/Authentication/SignUp'
import ChangePassword from './Components/Authentication/ChangePassWord';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './Context/Context';

function App() {
  const {user}=useContext(Context);
  return (
   <>

   <BrowserRouter>
   <Header/>
   
   <Box style={{margin :64}}></Box>
   <Routes>
     <Route exact path="/" element={ <HomePage/> } ></Route>
     <Route path="/userPost" element={ user?<OwnContent/>:<Login/> } ></Route>
   <Route path='/details/:id' element={<ContentDetail/>}></Route>
   <Route path='/create' element={user?<Create_Wali/>:<Login/>}></Route>
   {/* <Route path='/update/' element={<Update/>}></Route> */}
   <Route path='/about' element={<About/>}> </Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/changePassW' element={<ChangePassword/>}></Route>
   <Route path='/signup' element={<SignUp/>}></Route>

   {/* <Puri_post_dikhane_wala/> */}
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
