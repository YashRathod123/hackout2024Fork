// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import styles from './Styles/Main.module.scss';
import { Header } from "./Components/Header";
import { Home } from './Pages/Home';
import { Destination } from './Pages/Explore';
import { Crew } from './Pages/Question';
import { Technology } from './Pages/Technology';
import Course from './Components/course';

const data = require('./Assets/shared/data.json');

function App() {
  const location = useLocation();

  const [mainClass, setMainClass] = useState('');
  const [mainStyle, setMainStyle] = useState(styles.main);

  useEffect(() => {
    if (location.pathname === '/') {
      setMainClass('home');
      setMainStyle(styles.main);
    }

    if (location.pathname === '/destination') {
      setMainClass('destination');
      setMainStyle(styles.mainDestination);
    }

    if (location.pathname === '/crew') {
      setMainClass('crew');
      setMainStyle(styles.mainCrew);
    }

    if (location.pathname === '/technology') {
      setMainClass('technology');
      setMainStyle(styles.mainTechnology);
    }
  }, [location.pathname]);

  return (
      <div className={mainClass}>
        <Header />
        <main className={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="destination" element={<Destination data={data.destinations} />} />
            <Route path="crew" element={<Crew data={data.crew} />} />
            <Route path="technology" element={<Technology data={data.technology} />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
