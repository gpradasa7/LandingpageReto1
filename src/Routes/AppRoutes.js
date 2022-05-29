import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../Containers/home";

import React, { Component } from "react";

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* Rutas Publicas */}
          <Route path="/" element={<Home />} />
          {/* Redireccionamiento */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }
}
