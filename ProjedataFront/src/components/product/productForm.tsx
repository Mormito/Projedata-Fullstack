import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"

import { NotebookPen, Plus } from "lucide-react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { CreateUpdateProduct } from "./postProduct"
import { useState } from "react"
import type { FormUpdateProps, Product } from "@/interfaces/Interfaces"

export function FormProduct({ option, id }: FormUpdateProps){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    async function loadProductData() {
      const res = await fetch(`http://localhost:8080/product/${id}`)
      const product: Product = await res.json();
        if (product) {
            setName(product.name);
            setPrice(product.price);
        }
    }

    return(
        <Dialog>
            <DialogTrigger asChild onClick={() => {id && loadProductData()}}>{option == true ? <Button className="w-full flex items-center gap-2 justify-center"><Plus />Create Product</Button> : <NotebookPen className="cursor-pointer hover:text-primary duration-200 ease-in-out"/>}</DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{option == true ? "Create" : "Update"} a product</DialogTitle>
                    <DialogDescription>
                        This version can't add a relation between material and product. Please wait for a future update.
                    </DialogDescription>
                </DialogHeader>

                <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                     
                    <div className="flex flex-col gap-1">
                    <Label>Product name</Label>
                    <Input placeholder="Product" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    <div className="flex flex-col gap-1">
                    <Label>Product price</Label>
                    <Input type="text" placeholder="Example: 12.50" value={price} id="price" onChange={(e) => setPrice(Number(e.target.value))} required/>
                    </div>

                    <CreateUpdateProduct url="product" content="Product" id={id} name={name} price={price} />

                </form>

            </DialogContent>
        </Dialog>
    )
}