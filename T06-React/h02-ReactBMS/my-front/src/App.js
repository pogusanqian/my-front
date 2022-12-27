import './APP.css';
import routes from './routes';
import React, { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      {useRoutes(routes)}
    </Fragment>
  );
}

export default App;
