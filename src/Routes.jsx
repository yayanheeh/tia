import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import ProductList from './views/ProductList';
import UserList from './views/UserList';
import Typography from './views/Typography';
import Icons from './views/Icons';
import Account from './views/Account';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';
import Tes from './views/Tes';
import TentangKami from './views/TentangKami';
import Paduan from './views/Paduan';
import Profil from './views/Profil';
import Visimisi from './views/Visimisi';
import Dokumentasi from './views/Dokumentasi';
import PaketUmroh from './views/PaketUmroh';
import Footer from './views/Footer';


export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/dashboard"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={UserList}
          exact
          path="/users"
        />
        <Route
          component={ProductList}
          exact
          path="/products"
        />
        <Route
          component={Typography}
          exact
          path="/typography"
        />
        <Route
          component={Icons}
          exact
          path="/icons"
        />
        <Route
          component={Account}
          exact
          path="/account"
        />
        <Route
          component={Settings}
          exact
          path="/settings"
        />
        <Route
          component={SignUp}
          exact
          path="/sign-up"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={UnderDevelopment}
          exact
          path="/under-development"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
<Route
          component={TentangKami}
          exact
          path="/tentangkami"
        /><Route
          component={Paduan}
          exact
          path="/paduan"
        />


<Route
          component={Profil}
          exact
          path="/profil"
        />
<Route
          component={Visimisi}
          exact
          path="/visimisi"
        />
<Route
          component={PaketUmroh}
          exact
          path="/paketumroh"
        />
        <Route
          component={Footer}
          exact
          path="/footer"
        />
        <Route
          component={Dokumentasi}
          exact
          path="/dokumentasi"
        />


<Route
          component={Tes}
          exact
          path="/tes"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
