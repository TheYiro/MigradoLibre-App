import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import submenu from "../routes/SubmenuRoutes.json";


const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326")
      .then((response) => {
        const categories = response.data.available_filters.find(
          (filter) => filter.id === "category"
        ).values;
        setCategories(categories);
      });
  }, []);

  const handleSubMenuClick = (categoryName) => {
    setVisibleSubmenu((prev) => (prev === categoryName ? null : categoryName));
  };

  const getSymbol = (categoryName) => {
    return visibleSubmenu === categoryName ? "-" : "+";
  };

  return (
    <div className="category-menu">
      <h2>Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/${category.id}`}
              onClick={() => handleSubMenuClick(category.name)}
            >
              {getSymbol(category.name)} {category.name}
            </Link>
            {category.name === "Computación" && visibleSubmenu === "Computación" && (
              <div id="submenu1" className="category-submenu">
                <ul>
                  {submenu.Computacion.map((item) => (
                    <li key={item.id}>
                      <Link to={`/${item.category_id}`}>{item.domain_id}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {category.name === "Electrónica, Audio y Video" && visibleSubmenu === "Electrónica, Audio y Video" && (
              <div id="submenu2" className="category-submenu">
                <ul>
                  {submenu.Electronica_Audio_y_video.map((item) => (
                    <li key={item.id}>
                      <Link to={`/${item.category_id}`}>{item.domain_id}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;