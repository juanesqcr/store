import Layout from "@containers/Layout";
import Checkout from "@pages/Checkout";
import CreateAccount from "@pages/CreateAccount";
import Home from "@pages/Home";
import Login from "@pages/Login";
import MyAccount from "@pages/MyAccount";
import NewPassword from "@pages/NewPassword";
import NotFound from "@pages/NotFound";
import Orders from "@pages/Orders";
import PasswordRecovery from "@pages/PasswordRecovery";
import SendEmail from "@pages/SendEmail";
import "@styles/global.css";
import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initalState = useInitialState();
  return (
    <React.Fragment>
      <AppContext.Provider value={initalState}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/signup" element={<CreateAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </React.Fragment>
  );
};

export default App;
