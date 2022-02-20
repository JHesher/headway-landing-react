import React from 'react';
import { Home } from './pages/Home';
import './styles/_reset.scss';
import './styles/utils/_normalize.scss';
import { GetSmarter } from './pages/GetSmarter';
import { Summary } from './pages/Summary';
import { Catalog } from './pages/Catalog';
import { ReadOrListen } from './pages/ReadOrListen';
import { Comments } from './pages/Comments';
import { Footer } from './pages/Footer';
import { Header } from './pages/Header';
import { Button } from './pages/Button';

import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <main className="page__body">
        <Home />
        <GetSmarter />
        <Summary />
        <Catalog />
        <ReadOrListen />
        <Comments />
      </main>
      <Footer />
      <Button />
    </>
  );
}

export default App;
