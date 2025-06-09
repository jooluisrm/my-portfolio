"use client"

type Props = {
    text: string;
};

export const LiNav = ({ text }: Props) => {
    const handleClick = () => {
        const id = text.toLowerCase(); // transforma "Projetos" em "projetos"
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <li
            className="transition-all font-semibold cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 hover:text-blue-500"
            onClick={handleClick}
        >
            {text}
        </li>
    );
};
