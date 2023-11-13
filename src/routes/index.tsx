import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainLayout from '../Layout';
import Prices from '../pages/Pricing';
import { ROUTES } from '../constant/route';
import FAQ from '../pages/FAQ';
import Blog from '../pages/Blog';
import SignIn from '../pages/SIgnIn';
import SignUp from '../pages/SignUp';
import ContactUs from '../pages/ContactUs';
import BlogDetail from '../pages/BlogDetail';

const MainRouter = () => {
  const showMainLayout = true

  const renderMainLayout = (element : React.ReactElement) => (showMainLayout ? <MainLayout>{element}</MainLayout> : element);

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.HOMEPAGE}
          element={renderMainLayout(<HomePage />)}
        />
        <Route
          path={ROUTES.PRICING}
          element={renderMainLayout(<Prices />)}
        />
        <Route
          path={ROUTES.FAQ}
          element={renderMainLayout(<FAQ />)}
        />
        <Route
          path={ROUTES.BLOG}
          element={renderMainLayout(<Blog />)}
        />
        <Route
          path={ROUTES.BLOG_DETAIL}
          element={renderMainLayout(<BlogDetail />)}
        />
        <Route
          path={ROUTES.SIGN_IN}
          element={<SignIn />}
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={<SignUp />}
        />
        <Route
          path={ROUTES.CONTACT_US}
          element={<ContactUs />}
        />
      </Routes>
    </Router>
  );
};

export default MainRouter;
