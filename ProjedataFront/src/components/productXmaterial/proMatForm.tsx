import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "../ui/button"
import { NotebookPen, Plus } from "lucide-react"
import { Label } from "../ui/label"
import { CreateUpdateProMat } from "./postProMat"
import { useState } from "react"
import type { FormUpdateProps, Material, Product } from "@/interfaces/Interfaces"

export function FormProMat({ option, id }: FormUpdateProps){
    const [productID, setProductId] = useState<number | null>(null)
    const [rawMaterialID, setRawMaterialId] = useState<number | null>(null)
    const [quantity, setQuantity] = useState<number | null>(null)

    const [products, setProducts] = useState<Product[]>([])
    const [materials, setMaterials] = useState<Material[]>([])

    async function loadMaterialData() {
      const res = await fetch("http://localhost:8080/raw_material")
      const data: Material[] = await res.json()
      setMaterials(data)
    }

    async function loadProductData() {
      const res = await fetch("http://localhost:8080/product")
      const data: Product[] = await res.json()
      setProducts(data)
    }

    return(
        <Dialog>
            <DialogTrigger asChild onClick={() => {loadMaterialData(); loadProductData();}} >
                {option ? <Button className="w-full flex items-center gap-2 justify-center"><Plus />Create Relation</Button> : <NotebookPen className="cursor-pointer hover:text-primary duration-200 ease-in-out"/>}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{option ? "Create" : "Update"} a relation</DialogTitle>
                </DialogHeader>

                <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                     
                    <div className="flex flex-col gap-1">
                        <Label>Product</Label>
                        <Select  value={productID !== null ? productID.toString() : undefined}  onValueChange={(v) => setProductId(Number(v))} required >
                          <SelectTrigger className="w-full border rounded px-2 py-1">
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {products.filter((p) => p.id !== undefined).map((p) => (
                                  <SelectItem key={p.id} value={p.id!.toString()}>
                                    {p.name}
                                  </SelectItem>
                                ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label>Raw Material</Label>
                        <Select value={rawMaterialID !== null ? rawMaterialID.toString() : undefined} onValueChange={(v) => setRawMaterialId(Number(v))} required >
                          <SelectTrigger className="w-full border rounded px-2 py-1">
                            <SelectValue placeholder="Select a material" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {materials.filter((rm) => rm.id !== undefined).map((rm) => (
                                  <SelectItem key={rm.id} value={rm.id!.toString()}>
                                    {rm.name}
                                  </SelectItem>
                                ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label>Required amount</Label>
                        <input type="number" placeholder="How much raw material do you need to create the product?" value={quantity ?? ""} 
                        onChange={(e) => setQuantity(Number(e.target.value))} required className="border rounded px-2 py-1"/>
                    </div>

                    <CreateUpdateProMat  url="product_materials"  content="Relation"  id={id}  productID={productID!}  rawMaterialID={rawMaterialID!}  quantity={quantity!} />

                </form>

            </DialogContent>
        </Dialog>
    )
}