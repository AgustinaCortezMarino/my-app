import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllProducts } from "../../app/services/productServices";

export const DetailCart = () => {
  const [products, setProcuts] = useState([]);

  useEffect(
    () =>
      getAllProducts().then((allProductsFromDB) =>
        setProcuts(allProductsFromDB)
      ),
    []
  );
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {products.length > 0 &&
            products.map((product, index) => (
              <>
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                </tr>
              </>
            ))}
        </tr>
      </tbody>
    </Table>
  );
};
