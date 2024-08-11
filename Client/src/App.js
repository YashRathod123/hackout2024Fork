//sort this once we have the useLocation hook in place
import { useLocation, Route, Routes } from 'react-router-dom';
import './App.scss';
import styles from './Styles/Main.module.scss'
import { Header } from "./Components/Header.js";
import { Home } from './Pages/Home.js';
import { Destination } from './Pages/Explore.js';
import { Crew } from './Pages/Question.js';
import { Technology } from './Pages/Technology.js';
import { useEffect, useState } from 'react';
import  { CourseState } from './context/courseProvider.js';


const data = require('./Assets/shared/data.json');
const ENDPOINT = "http://localhost:3001/api";
function App() {

    const { setAllCourses} = CourseState();
    const location = useLocation();

    const [mainClass, setMainClass] = useState('');

    const [mainStyle, setMainStyle] = useState(styles.main);

    useEffect(() => {
        if (location.pathname === '/') {
            setMainClass('home')
            setMainStyle(styles.main);
        }
    
        if (location.pathname === '/destination') {
            setMainClass('destination')
            setMainStyle(styles.mainDestination);
        }
    
        if (location.pathname === '/crew') {
            setMainClass('crew')
            setMainStyle(styles.mainCrew);
        }
    
        if (location.pathname === '/technology') {
            setMainClass('technology')
            setMainStyle(styles.mainTechnology);
        }
    }, [location.pathname])

    useEffect(() => {
        async function loadChat() {
          const response = await fetch(`${ENDPOINT}/course`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const data = await response.json();
          // console.log(data);
          if (response.ok) {
            setAllCourses(data);
          } else {
            console.log(data);
          }
        }
    
        loadChat();
      }, []);



    return (
        <div className={mainClass}>
            <Header />

            <main className={mainStyle}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="destination" element={<Destination data={data.destinations}  />} />
                <Route path="crew" element={<Crew data={data.crew} />} />
                <Route path="technology" element={<Technology data={data.technology} />} />

            </Routes>
                
            </main>
                    
        </div>
  );
}

export default App;