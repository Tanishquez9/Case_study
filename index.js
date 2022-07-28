import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Add from './components/add';
import Table from './components/table';
import Edit from './edit';
import SearchCustomer from './components/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/Add" element={<Add/>}></Route>
    <Route path="/table" element={<Table/>}></Route>
    <Route path="/edit" element={<Edit/>}></Route>
    <Route path="/search" element={<SearchCustomer/>}></Route>
  </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
