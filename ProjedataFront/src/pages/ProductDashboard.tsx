import { DeleteButton } from "@/components/deleteButton";
import { GoBack } from "@/components/goBackButton";
import { FormProduct } from "@/components/product/productForm";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Product } from "@/interfaces/Interfaces"
import { NotebookPen, Trash2, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react"

function ProductDashboard(){
    const [products, setProducts] = useState<Product[]>([]);

    async function loadData() {
        const res = await fetch("http://localhost:8080/product");
        const data: Product[] = await res.json();
        setProducts(data);
    }

    useEffect(() => {
        loadData()
    }, [])

    return(
    <div className="w-10/12 lg:w-1/3 min-h-screen flex flex-col justify-center items-center mx-auto">
        <Table className="w-full">
            <TableCaption>A list of products.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map(p => (
                <TableRow key={p.id}>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>$ {p.price}</TableCell>
                    <TableCell className="flex justify-center gap-4">
                        {p.id && <DeleteButton id={p.id} url={'product'} content="Product" onDelete={loadData}/>}
                        <FormProduct option={false} id={p.id}/>
                    </TableCell>
                </TableRow>

                ))}
            </TableBody>
        </Table>

        <GoBack />
    </div>
    )
}

export default ProductDashboard