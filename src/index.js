import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './setup/router';
import { ReqInterceptor, ResInterceptor } from './helpers/interceptor';
import { AuthConfigProvider } from './setup/context/authConfig'; // Update import

const root = ReactDOM.createRoot(document.getElementById('root'));

ReqInterceptor();
ResInterceptor();

root.render(
  <React.StrictMode>
    <AuthConfigProvider> {/* Wrap with the AuthConfigProvider */}
      <AppRouter />
    </AuthConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
