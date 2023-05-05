import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)

/** Apuntes
 *  - El modo estricto sólo se usa en desarrollo. Mirar documentación.
 *    https://legacy.reactjs.org/docs/strict-mode.html
 * 
 */
