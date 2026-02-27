import type { ButtonProps, Material } from "@/interfaces/Interfaces";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface CreateButtonProps extends Material, ButtonProps {}

export function CreateUpdateMaterial({ name, quantity, url, content }: CreateButtonProps) {

  async function handleCreate() {

  if (!name || name.trim() === "") {
    toast.error("Name is required");
    return;
  }

  if (quantity === null || quantity === undefined || quantity <= 0) {
    toast.error("Quantity must be greater than 0");
    return;
  }

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

  return (
    <Button type="submit" onClick={handleCreate}><Plus /> Create Product </Button>
  );
}