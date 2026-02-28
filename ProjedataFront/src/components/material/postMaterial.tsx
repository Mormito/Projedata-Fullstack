import type { ButtonProps, Material } from "@/interfaces/Interfaces";
import { toast } from "sonner";
import { NotebookPen, Plus } from "lucide-react";
import { Button } from "../ui/button";

interface CreateButtonProps extends Material, ButtonProps {}

export function CreateUpdateMaterial({ id, name, quantity, url, content }: CreateButtonProps) {

  async function handleCreate() {

    const response = await fetch(`http://localhost:8080/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, quantity }),
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
      body: JSON.stringify({ id, name, quantity }),
    });
    
    if (response.ok) {
      toast.success(`${content} successfully updated!`);
    } else {
      toast.error("Failed to update");
    }
    }

    async function handleVerify(){

        if (!name || name.trim() === "") {
          toast.error("Name is required");
          return;
        }
    
        if (quantity === null || quantity === undefined || quantity <= 0) {
          toast.error("Quantity must be greater than 0");
          return;
        }

        if(id === undefined){
          await handleCreate();
        } else {
          await handleUpdate(); 
        }

    }


  return (
     <Button type="submit" onClick={handleVerify}>{id === undefined ? <Plus /> : <NotebookPen />}{id === undefined ? "Create" : "Update"} Material </Button>
    
  );
}