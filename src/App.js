import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/homepage.component';
import Navigation from './routes/navigation/navigation.component'
import Authentication from './pages/authentication/authentication.component';

const Shop = () => {
  return(
    <div>
      <h1>SHOP COMPONENT</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
