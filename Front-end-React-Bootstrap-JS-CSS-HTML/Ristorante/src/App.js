import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { TablePage } from "./pages/TablePage";
import { Admin } from "./pages/Admin";
import { OrderCategory } from "./components/category/Menu";
import { Category } from "./pages/Category";
import { useState } from "react";
import Cart from "./components/Cart";
import { Login } from "./pages/LoginPage";
import { OrderPage } from "./pages/OrderPage";

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const handleReset = () => {
    setCartProducts([]);
  };

  const handleDeleteClick = (product) => {
    console.log(cartProducts);
    const newCart = cartProducts.filter((el) => {
      if (el.id === product.id) {
        el.quantity--;
        if (el.quantity === 0) {
          return false;
        }
      }
      return true;
    });
    setCartProducts(newCart);
  };

  // create new product
  const handleAddClick = (product) => {
    let found = false;
    let newCart = cartProducts.filter((el) => {
      return true;
    });
    newCart.forEach((el) => {
      if (el.id === product.id) {
        el.quantity++;
        found = true;
      }
    });

    if (!found) {
      const newProduct = {
        id: product.id,
        name: product.name,
        quantity: 1,
        description: product.description,
        price: product.price,
        index: cartProducts.length,
      };
      const newCart2 = [...newCart, newProduct];
      setCartProducts(newCart2);
    } else {
      setCartProducts(newCart);
    }
  };
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/order" element={<OrderPage />} />
        <Route
          path="/table/:tableId/"
          element={
            <OrderCategory
              add={handleAddClick}
              del={handleDeleteClick}
              cartProducts={cartProducts}
              reset={handleReset}
            />
          }
        />
        <Route
          path="/table/:tableId/:type"
          element={
            <Category
              addFood={handleAddClick}
              del={handleDeleteClick}
              cartProducts={cartProducts}
            />
          }
        />
      </Routes>
    </Container>
  );
};

export default App;
