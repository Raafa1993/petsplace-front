import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminRoute from './AdminRoute';

import Home from '../pages/Home';
import FilterList from '../pages/FilterList';
import SearchProduct from '../pages/SearchProduct';
import ShoppingCart from '../pages/ShoppingCart';
import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Payment from '../pages/Payment';
import User from '../pages/User';
import ProductRegistration from '../pages/ProductRegistration';
import EditCard from '../pages/EditCard';
import ConsumerRoute from './ConsumerRoute';
import EditAddress from '../pages/EditAddress';
import { Orders } from '../pages/Orders';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={FilterList} />
      <Route path="/search/:searchProduct" exact component={SearchProduct} />
      <Route path="/cart" exact component={ShoppingCart} />
      <Route path="/login" exact component={Signin} />
      <Route path="/signup" exact component={SignUp} />
      <ConsumerRoute path="/payment" exact component={Payment} isPrivate />
      <ConsumerRoute path="/user" exact component={User} isPrivate />
      <ConsumerRoute path="/user/:id" exact component={EditAddress} isPrivate />
      <AdminRoute path="/products/create" exact component={ProductRegistration} isPrivate />
      <AdminRoute path="/products/:id" exact component={EditCard} isPrivate />
      <AdminRoute path="/orders" exact component={Orders} isPrivate />
    </Switch>
  );
}

export default Routes;
