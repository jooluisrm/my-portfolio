import { Button } from "../ui/button";

type Props = {
    text: string;
}

export const ItemTechStack = ({ text }: Props) => {
    return (
        <Button className="p-3 text-[12px] h-2 rounded-full bg-blue-700 text-white font-bold hover:bg-blue-500">
            {text}
        </Button>
    );
}