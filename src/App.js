import React from 'react'
import Navbar from './components/Navbar';
import { Regform } from './components/Regform';
export const App = () => {
  return (
    <>
     <Navbar/>
     <Regform/>
    </>
  )
}
export default App;




// var express = require('express');
// var session = require('express-session');
// var app = express();

// app.use(session({
//   secret:"cookie",
//   resave:true,
//   saveUninitialized:true,
//   cookie:{maxAge:3000}

// }));

// app.get('/',function(req,res){
//   if(req.session.page_views){
//     req.session.page_view++;
//     res.send("No. of visits " + req.session.page_view);
//   }
//   else{
//     req.session.page_view = 1;
//     res.send("You are a first time visitor");
//   }
// });