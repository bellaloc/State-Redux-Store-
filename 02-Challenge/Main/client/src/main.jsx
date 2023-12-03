import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';

// Define your routes using the new React Router v6 syntax
const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products/:id" element={<Detail />} />
      <Route path="/orderHistory" element={<OrderHistory />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <RoutesComponent />
    </Router>
  </Provider>,
);
