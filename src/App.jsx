import logo from './logo.svg';
import './App.css';
import PrincipalPage from './components/principal-page';
import PrincipalButtons from './components/principal-button';
import Playing from './components/Playing';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Gameover from './components/Gameover';

function Home() {
  return (
    <>
      <PrincipalPage />
      <PrincipalButtons />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/playing' element={<Playing />} />
        <Route path='/gameover' element={<Gameover />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
