import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainLayout from '../Layout';
import Prices from '../pages/Pricing';
import { ROUTES } from '../constant/route';
import FAQ from '../pages/FAQ';
import Blog from '../pages/Blog';
import SignIn from '../pages/SIgnIn';

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
          path={ROUTES.SIGN_IN}
          element={<SignIn />}
        />
      </Routes>
    </Router>
  );
};

export default MainRouter;
