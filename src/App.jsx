import React from 'react';
import Header from './Header';

import './App.scss';

const cssClasses = "app app--active";

const App = () => (
  <div className={cssClasses}>
    
    <Header />
    {/* <label htmlFor="firstname">First name</label>
    <input type="text" id="firstname"/> */}
  </div>
);

export default App;
