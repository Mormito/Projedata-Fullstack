import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"

import { Plus } from "lucide-react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { CreateUpdateProduct } from "./postProduct"
import { useState } from "react"

export function FormProduct(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    return(
        <Dialog>
            <DialogTrigger asChild><Button><Plus />Create Product</Button></DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a product</DialogTitle>
                    <DialogDescription>
                        This version can't add a relation between material and product. Please wait for a future update.
                    </DialogDescription>
                </DialogHeader>

                <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                     
                    <div className="flex flex-col gap-1">
                    <Label>Product name</Label>
                    <Input placeholder="Product" id="name" onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    <div className="flex flex-col gap-1">
                    <Label>Product price</Label>
                    <Input placeholder="Example: 12.50" id="price" onChange={(e) => setPrice(Number(e.target.value))} required/>
                    </div>

                    <CreateUpdateProduct url="product" content="Product" name={name} price={price} />

                </form>

            </DialogContent>
        </Dialog>
    )
}