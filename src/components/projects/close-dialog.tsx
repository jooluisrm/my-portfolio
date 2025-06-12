import { X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {
    setOpen: (value: boolean) => void;
}

export const CloseDialog = ({ setOpen }: Props) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <X className="cursor-pointer" onClick={() => setOpen(false)} />
            </TooltipTrigger>
            <TooltipContent>
                <p>Fechar</p>
            </TooltipContent>
        </Tooltip>
    );
}