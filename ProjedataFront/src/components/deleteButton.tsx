import type { ButtonProps } from "@/interfaces/Interfaces";
import { Trash2 } from "lucide-react";
import { toast } from "sonner"

export function DeleteButton({ id, url, content, onDelete }: ButtonProps ) {

  async function handleDelete() {    
    await fetch(`http://localhost:8080/${url}/${id}`, {
      method: "DELETE",
    });

    // Nota: caso o onDelete esteja "armazenando" algo, então é executado, ou seja, executa a função que eu mandar, fazendo um reload no data
    if(onDelete) {
      onDelete();
    }

    toast.success(`${content} successfully deleted!`);
  }

  return (
    <a onClick={handleDelete}>
      <Trash2 className="cursor-pointer hover:text-primary duration-200 ease-in-out"/>
    </a>
  );
}