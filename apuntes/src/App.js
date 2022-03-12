import Git from './Components/Git'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import AddContent from './Components/AddContent'
import Search from './Components/Search'
import Home from './Components/Home'
import './style.css'
import './App.css'
import api from './api/info';
import { unstable_useEnhancedEffect } from '@mui/material'
import React, { useEffect, useState } from 'react'


function App(props) {

  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const response = await api.get('/info');
    return response.data;
  }

  useEffect(() => {
    const getAllInfo = async () => {
      const allInfo = await getInfo();
      if (allInfo) setInfo(allInfo);
    }

    getAllInfo();
    console.log(getAllInfo());
  }, [])

  const ruta = props.ruta;
  return (
    <div className="App">
      <Navbar />
      {(ruta === 'addInfo') ? <AddContent /> : (ruta === 'home') ? <Home /> : (ruta === 'content') ? <Content /> : <Search />}
    </div>
  );
}

export default App;
