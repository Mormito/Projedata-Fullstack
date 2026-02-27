import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function GoBack() {
  const navigate = useNavigate();

  return (
    <Button className="mt-5 lg:mt-10" onClick={() => navigate("/")}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      Go back
    </Button>
  );
}