import {useCallback, useContext, useEffect, useState} from 'react';
import Main from "./main";
import Basket from "./basket";
import useStore from "../store/use-store";
import useSelector from "../store/use-selector";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from '../components/article';
import LanguageProvider from '../store/language';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
    <LanguageProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='article/:id' element={<Article/>}/>
        </Routes>
        {activeModal === 'basket' && <Basket/>}
    </BrowserRouter>
    </LanguageProvider>
    </>
  );
}

export default App;
