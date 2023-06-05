import AppRoutes from './pages/routes'
import React from 'react';
import MainContainer from './components/main-container/main-container';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <MainContainer>
      <Header />
      <AppRoutes />
      <Footer />
    </MainContainer>
  );
};

export default App;
