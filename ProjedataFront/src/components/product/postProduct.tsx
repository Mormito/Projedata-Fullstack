import type { Product, ButtonProps } from "@/interfaces/Interfaces";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface CreateButtonProps extends Product, ButtonProps {}

export function CreateUpdateProduct({ id, name, price, url, content }: CreateButtonProps) {

  async function handleCreate(){
    const response = await fetch(`http://localhost:8080/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
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
      body: JSON.stringify({ id, name, price }),
    });
    
    if (response.ok) {
      toast.success(`${content} successfully updated!`);
    } else {
      toast.error("Failed to update");
      console.log(response)
    }
    }

    async function handleVerify(){

        if (!name || name.trim() === "") {
          toast.error("Name is required");
          return;
        }
    
        if (price === null || price === undefined || price <= 0) {
          toast.error("Price must be greater than 0");
          return;
        }

        if(id === undefined){
          await handleCreate();
        } else {
          await handleUpdate(); 
        }

    }



  return (
    <Button type="submit" onClick={handleVerify}><Plus /> {id === undefined ? "Create" : "Update"} Product </Button>
  );
}