import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GalleryIndex from '../GalleryIndex/GalleryIndex';
import GalleryShow from '../GalleryShow/GalleryShow';
import NotFound from '../NotFound';

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
