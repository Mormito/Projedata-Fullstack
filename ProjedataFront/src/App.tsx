import { Routes, Route } from "react-router-dom"

import "./App.css"

import Home from "@/pages/Home"
import ProductDashboard from "@/pages/ProductDashboard"
import MaterialDashboard from "@/pages/MaterialDashboard"
import CalculatorDashboard from "./pages/CalculateDashboard"
import DependencesDashboard from "@/pages/DependencesDashboard"


function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/products-dashboard" element={<ProductDashboard />} />

      <Route path="/materials-dashboard" element={<MaterialDashboard />} />
      
      <Route path="/dependences-dashboard" element={<DependencesDashboard />} />

      <Route path="/calculator-dashboard" element={<CalculatorDashboard />} />

    </Routes>
  )
}

export default App