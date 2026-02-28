import type { ButtonProps, ProductMaterial } from "@/interfaces/Interfaces";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface CreateButtonProps extends ProductMaterial, ButtonProps {}

export function CreateUpdateProMat({ id, productID, rawMaterialID, quantity, url, content }: CreateButtonProps) {

    // product_materials
  async function handleCreate(){
    const response = await fetch(`http://localhost:8080/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productID, rawMaterialID, quantity }),
    });
    
    if (response.ok) {
      toast.success(`${content} successfully created!`);
    } else {
      toast.error("Failed to create");
      console.log(response)
    }

    }

  async function handleUpdate() {
    const response = await fetch(`http://localhost:8080/${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, productID, rawMaterialID, quantity }),
    });
    
    if (response.ok) {
      toast.success(`${content} successfully updated!`);
    } else {
      toast.error("Failed to update");
    }
    }

    async function handleVerify(){
    
        if (productID === null || productID === undefined || quantity <= 0) {
          toast.error("A product is required");
          return;
        }

        if (rawMaterialID === null || rawMaterialID === undefined || quantity <= 0) {
          toast.error("A raw material is required");
          return;
        }

        if (quantity === null || quantity === undefined || quantity <= 0) {
          toast.error("A quantity is required");
          return;
        }

        if(id === undefined){
          await handleCreate();
        } else {
          await handleUpdate(); 
        }

    }

  return (
    <Button type="submit" onClick={handleVerify}><Plus /> {id === undefined ? "Create" : "Update"} Relation </Button>
  );
}