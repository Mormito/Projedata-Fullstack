import { Routes, Route } from "react-router-dom"

import Home from "@/pages/Home"
import ProductDashboard from "@/pages/ProductDashboard"
import MaterialDashboard from "@/pages/MaterialDashboard"
import ProductXMaterialsDashboard from "@/pages/ProductXMaterialsDashboard"

import "./App.css"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/products-dashboard" element={<ProductDashboard />} />

      <Route path="/materials-dashboard" element={<MaterialDashboard />} />

      <Route path="/productxmaterials-dashboard" element={<ProductXMaterialsDashboard />} />

    </Routes>
  )
}

export default App