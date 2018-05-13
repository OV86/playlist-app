import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found">
    Page not found! <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
