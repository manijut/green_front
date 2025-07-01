import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Loading from '../components/Loading';

const SellerLogin = lazy(() => import('../components/seller/SellerLogin'));
const SellerLayout = lazy(() => import('../pages/seller/SellerLayout'));
const AddProduct = lazy(() => import('../pages/seller/AddProduct'));
const ProductList = lazy(() => import('../pages/seller/ProductList'));
const Orders = lazy(() => import('../pages/seller/Orders'));

const SellerRoutes = () => {
  const { isSeller } = useAppContext();

  return (
    <Suspense fallback={<Loading />}>
      <Route
        path="/seller"
        element={isSeller ? <SellerLayout /> : <SellerLogin />}
      >
        <Route index element={isSeller ? <AddProduct /> : null} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Suspense>
  );
};

export default SellerRoutes;
