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
import type { CalculateProductXMaterial } from "@/interfaces/Interfaces"
import { useEffect, useState } from "react"

function CalculatorDashboard(){
    const [objects, setObject] = useState<CalculateProductXMaterial[]>([]);

    useEffect(() => {
        async function loadData() {
            const res = await fetch("http://localhost:8080/product_materials/calculate");
            const data: CalculateProductXMaterial[] = await res.json();
            setObject(data);
        }
        loadData()
    }, [])

    return(
    <div className="w-10/12 lg:w-1/4 min-h-screen flex flex-col justify-center items-center mx-auto">
        <Table className="w-full">
            <TableCaption>A list of how many products can be created by the raw materials.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-left">ID</TableHead>
                    <TableHead className="text-center">Name</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {objects.map(o => (
                <TableRow key={o.product_id}>
                    <TableCell className="text-left">{o.product_id}</TableCell>
                    <TableCell className="text-center">{o.product_name}</TableCell>
                    <TableCell className="text-right">{o.quantity}</TableCell>
                </TableRow>

                ))}
            </TableBody>
        </Table>
        
        <GoBack />
    </div>
    )
}

export default CalculatorDashboard