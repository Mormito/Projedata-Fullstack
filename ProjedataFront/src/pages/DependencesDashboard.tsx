import { DeleteButton } from "@/components/deleteButton";
import { GoBack } from "@/components/goBackButton";
import { FormProMat } from "@/components/productXmaterial/proMatForm";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { DetailedProductMaterial } from "@/interfaces/Interfaces"
import { useEffect, useState } from "react"

function DependencesDashboard(){
    const [objects, setObject] = useState<DetailedProductMaterial[]>([]);

    const loadData = async () => {
        const res = await fetch("http://localhost:8080/product_materials/detailed");
        const data: DetailedProductMaterial[] = await res.json();
        setObject(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return(
    <div className="w-10/12 lg:w-1/4 min-h-screen flex flex-col justify-center items-center mx-auto">
        <Table className="w-full">
            <TableCaption>A list of material dependencies for each product.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-left">ID</TableHead>
                    <TableHead className="text-left">Product</TableHead>
                    <TableHead className="text-center">Material</TableHead>
                    <TableHead className="text-center">Required amount</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {objects.map(p => (
                <TableRow key={p.id}>
                    <TableCell className="text-left">{p.id}</TableCell>
                    <TableCell className="text-left">{p.product_name}</TableCell>
                    <TableCell className="text-center">{p.raw_material_name}</TableCell>
                    <TableCell className="text-center">{p.quantity}</TableCell>
                    <TableCell className="flex justify-center gap-4">
                        <DeleteButton id={p.id} url={`product_materials`} content="Dependence" onDelete={loadData}/>
                        <FormProMat option={false} id={p.id}/>
                    </TableCell>
                </TableRow>

                ))}
            </TableBody>
        </Table>
        
        <GoBack />
    </div>
    )
}

export default DependencesDashboard