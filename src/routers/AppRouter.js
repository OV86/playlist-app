import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import EditSongPage from '../components/EditSongPage';
import PlaylistDashboardPage from '../components/PlaylistDashboardPage';
import AboutMe from '../components/AboutMe';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PlaylistDashboardPage} exact />
        <Route path="/edit/:id" component={EditSongPage} />
        <Route path="/about" component={AboutMe} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
