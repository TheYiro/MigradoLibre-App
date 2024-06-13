import { useState, useEffect } from 'react';
import axios from 'axios';


const ProductList = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326';
    if (categoryId) {
      url += `&category=${categoryId}`;
    }
    axios.get(url)
      .then(response => {
        setProducts(response.data.results);
      });
  }, [categoryId]);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
          <a href={product.permalink} target="_blank" rel="noopener noreferrer">
            <h3>{product.title}</h3>
          </a>
            <h4>${product.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
