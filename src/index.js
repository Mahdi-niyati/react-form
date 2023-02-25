import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@600&family=Lexend+Deca&display=swap');
</style>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>
);
