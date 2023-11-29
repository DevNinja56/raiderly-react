import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../Layout';
import ScrollToTop from '../hooks/ScrollToTop';
import { ROUTE_LIST } from '../constant/route';

const MainRouter = () => {
  const showMainLayout = true

  const renderMainLayout = (element: React.ReactElement) => (showMainLayout ? <MainLayout>{element}</MainLayout> : element);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {ROUTE_LIST.map(({ link, element: Component, isHeader = true }) => (
          <Route key={'route--' + link}
            path={link}
            element={isHeader ? renderMainLayout(<Component />) : <Component />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default MainRouter;
