import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ErrorBoundary } from './components/patterns/advanced-concepts-and-hooks/error-boundry';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ErrorBoundary fallback={<h1>Error in App</h1>}>
      <App />
    </ErrorBoundary>
  // </React.StrictMode>
);

