import { DeleteButton } from "@/components/deleteButton";
import { GoBack } from "@/components/goBackButton";
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
import { NotebookPen } from "lucide-react";
import { useEffect, useState } from "react";

function MaterialDashboard(){
    const [materials, setMaterials] = useState<Material[]>([]);

    useEffect(() => {
        async function loadData() {
            const res = await fetch("http://localhost:8080/raw_material");
            const data: Material[] = await res.json();
            setMaterials(data);
        }
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
                        {p.id && <DeleteButton id={p.id} url={'raw_material'} content="Raw material"/>}
                        <NotebookPen className="cursor-pointer hover:text-primary duration-200 ease-in-out"/>
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