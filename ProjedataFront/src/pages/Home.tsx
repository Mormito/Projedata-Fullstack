import { Contact, GithubIcon, HandCoins, LayoutDashboard, Link, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { FormProduct } from "@/components/product/productForm"
import { FormMaterial } from "@/components/material/materialForm"
import { FormProMat } from "@/components/productXmaterial/proMatForm"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-5">

<div className="flex flex-col p-10 gap-3 border rounded-xl w-64">

  <h2 className="text-center font-semibold">Social Media</h2>

  <a href="https://www.github.com/mormito" target="_blank" rel="noopener noreferrer" className="w-full">
    <Button className="w-full flex items-center gap-2 justify-center"><GithubIcon />Github Profile</Button>
  </a>

  <a href="https://www.linkedin.com/in/mormito" target="_blank" rel="noopener noreferrer" className="w-full">
    <Button className="w-full flex items-center gap-2 justify-center"><Linkedin />Linkedin Profile</Button>
  </a>

  <a href="https://judge.beecrowd.com/pt/profile/1216755" target="_blank" rel="noopener noreferrer" className="w-full">
    <Button className="w-full flex items-center gap-2 justify-center"><Contact />Beecrowd Profile</Button>
  </a>

</div>

      <div className="flex flex-col p-10 gap-3 border rounded-xl">

        <h2 className="text-center font-semibold">Dashboards</h2>

        <Button onClick={() => navigate("/products-dashboard")}>
          <LayoutDashboard />
          Products Dashboard
        </Button>

        <Button onClick={() => navigate("/materials-dashboard")}>
          <LayoutDashboard />
          Materials Dashboard
        </Button>

        <Button onClick={() => navigate("/dependences-dashboard")}>
          <Link />
          Dependences Dashboard
        </Button>

        <Button onClick={() => navigate("/calculator-dashboard")}>
          <HandCoins />
          Calculator Dashboard
        </Button>

      </div>

      <div className="flex flex-col p-10 gap-3 border rounded-xl w-64">

        <h2 className="text-center font-semibold">Create data</h2>

        <div className="w-full"><FormProduct option={true} /></div>

        <div className="w-full"><FormMaterial option={true} /></div>

        <div className="w-full"><FormProMat option={true} /></div>

      </div>
    
    </div>
  )
}