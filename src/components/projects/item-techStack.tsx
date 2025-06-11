import { Button } from "../ui/button";

type Props = {
    text: string;
}

export const ItemTechStack = ({ text }: Props) => {
    return (
        <Button className="p-3 text-[12px] h-2 rounded-full border bg-blue-500 text-white font-bold hover:bg-blue-500">
            {text}
        </Button>
    );
}