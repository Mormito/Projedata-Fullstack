import type { ButtonProps } from "@/interfaces/Interfaces";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export function DeleteButton({ id, url, content, onDelete }: ButtonProps ) {

  async function handleDelete(event: React.MouseEvent) {
    event.preventDefault();

    try {
      if (url === "product") {
        await fetch(`http://localhost:8080/product_materials/by-product/${id}`, { method: "DELETE" });
        console.log(`Relation with Product id:${id} successfully deleted`)
      } else if (url === "raw_material") {
        await fetch(`http://localhost:8080/product_materials/by-material/${id}`, { method: "DELETE" });
        console.log(`Relation with Raw material id:${id} successfully deleted`)
      }

      // Criei estes métodos adicionais para corrigir uma falha no começo do projeto, onde criei a tabela productMaterials sem referenciar devidamente os ID's, causando crash.
      // Como não terei tempo de realizar toda a manutenção no back-end e refazer funções do front, estou "improvisando" uma correção.

      const res = await fetch(`http://localhost:8080/${url}/${id}`, { method: "DELETE" });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      if (onDelete) onDelete();

      toast.success(`${content} successfully deleted!`);
    } catch (err) {
      console.error(err);
      toast.error(`Failed to delete ${content}`);
    }
  }

  return (
    <a onClick={handleDelete}>
      <Trash2 className="cursor-pointer hover:text-primary duration-200 ease-in-out"/>
    </a>
  );
}