import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GalleryIndex from '../pages/GalleryIndex/GalleryIndex';
import GalleryShow from '../pages/GalleryShow/GalleryShow';
import NotFound from '../pages/NotFoundError/NotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GalleryIndex} />
        <Route path="/gallery/:id" component={GalleryShow} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
