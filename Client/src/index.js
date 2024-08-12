import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CourseProvider from './context/courseProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <CourseProvider>
  <ChakraProvider>
  <App />
</ChakraProvider>
</CourseProvider>
</BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
