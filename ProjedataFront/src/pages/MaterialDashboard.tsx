import { DeleteButton } from "@/components/deleteButton";
import { GoBack } from "@/components/goBackButton";
import { FormMaterial } from "@/components/material/materialForm";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Material } from "@/interfaces/Interfaces";
import { useEffect, useState } from "react";

function MaterialDashboard(){
    const [materials, setMaterials] = useState<Material[]>([]);

    async function loadData() {
        const res = await fetch("http://localhost:8080/raw_material");
        const data: Material[] = await res.json();
        setMaterials(data);
    }

    useEffect(() => {
        loadData()
    }, [])

    return(
    <div className="w-10/12 lg:w-1/3 min-h-screen flex flex-col justify-center items-center mx-auto">
        <Table className="w-full">
            <TableCaption>A list of materials.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {materials.map(p => (
                <TableRow key={p.id}>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.quantity}</TableCell>
                    <TableCell className="flex justify-center gap-4">
                        {p.id && <DeleteButton id={p.id} url={'raw_material'} content="Raw material" onDelete={loadData}/>}
                        <FormMaterial option={false} id={p.id}/>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>

        <GoBack />
    </div>
    )
}

export default MaterialDashboard