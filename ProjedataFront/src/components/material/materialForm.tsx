import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { NotebookPen, Plus } from "lucide-react"
import { useState } from "react"
import { CreateUpdateMaterial } from "./postMaterial"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import type { FormUpdateProps } from "@/interfaces/Interfaces";


export function FormMaterial({ option, id }: FormUpdateProps){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    return(
        <Dialog>
            <DialogTrigger asChild>{option == true ? <Button className="w-full flex items-center gap-2 justify-center"><Plus />Create Material</Button> : <NotebookPen className="cursor-pointer hover:text-primary duration-200 ease-in-out"/>}</DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{option == true ? "Create" : "Update"} a material</DialogTitle>
                </DialogHeader>

                <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                     
                    <div className="flex flex-col gap-1">
                    <Label>Material name</Label>
                    <Input placeholder="Material" id="name" onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    <div className="flex flex-col gap-1">
                    <Label>Material quantity</Label>
                    <Input type="number" placeholder="Example: 10" id="quantity" onChange={(e) => setQuantity(Number(e.target.value))} required/>
                    </div>

                    <CreateUpdateMaterial url="raw_material" content="Raw Material" id={id} name={name} quantity={quantity}/>

                </form>

            </DialogContent>
        </Dialog>
    )
}