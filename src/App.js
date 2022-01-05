import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderApp } from "./components/HeaderApp";
import { Home } from "./views/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductView } from "./views/ProductView";
import { PurchaseView } from "./views/PurchaseView";

const App = () => {
  return (
    <>
      <HeaderApp />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" exact element={<ProductView />} />
        <Route path="/purchase" exact element={<PurchaseView />} />
        <Route children={() => <Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
