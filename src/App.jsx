import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CategoryMenu from './components/CatergoryMenu';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="app">
      <div className="leftseccion">
      <CategoryMenu />
      </div>
      <div className="rightseccion">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
      </Routes>
    </div>
    </div>
  );
};

export default App;
