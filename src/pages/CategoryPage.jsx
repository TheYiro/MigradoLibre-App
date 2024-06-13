import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div className="category-page">
      <div className='title-category-page'>
      <h1>Productos en la categoría {categoryId} </h1>
      </div>
      <ProductList categoryId={categoryId} />
    </div>
  );
};

export default CategoryPage;
