import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Profiles from './pages/Profiles';
import MyPage from './pages/MyPage';
import ProfileEdit from './pages/ProfileEdit'
import BottomTeb from './components/BottomTeb'
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import { useState } from "react";
import Upload from "./pages/Upload"
import { TodoProvider } from './ContextApi';

const App = () => {

  const [ready, setReady] = useState(true);


  return ready ? <TodoProvider><Login setReady={setReady} ready={ready} /></TodoProvider> : (
    <TodoProvider>
      <MainBlock>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Profiles/*" element={<Profiles />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/ProfileEdit" element={<ProfileEdit />} />
          <Route path='/*' element={<h1>이 페이지는 존재하지 않습니다. - </h1>} />
        </Routes>
        <BottomTeb></BottomTeb>
      </MainBlock>
    </TodoProvider>
  );
};

export default React.memo(App);