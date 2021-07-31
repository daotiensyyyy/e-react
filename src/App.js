import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const Routes = React.lazy(() => import('./features/Route'));
function App() {
  return (
    <>
      <Suspense fallback={<div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" />....Please wait!</div>
      </div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Routes} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
