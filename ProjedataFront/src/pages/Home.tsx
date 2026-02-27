

import { LayoutDashboard, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { FormProduct } from "@/components/productForm"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col p-10 gap-3 border rounded-xl">

        <Button onClick={() => navigate("/products-dashboard")}>
          <LayoutDashboard />
          Products Dashboard
        </Button>

        <Button onClick={() => navigate("/materials-dashboard")}>
          <LayoutDashboard />
          Materials Dashboard
        </Button>

        <Button onClick={() => navigate("/productxmaterials-dashboard")}>
          <LayoutDashboard />
          Calculator Dashboard
        </Button>

        <FormProduct />

        <Button>
          <Plus />
          Create Material
        </Button>

      </div>
    </div>
  )
}