"use client";

type Props = {
    text: string;
    isActive?: boolean;
    onClick?: () => void;
};

export const LiNav = ({ text, isActive = false, onClick }: Props) => {
    const handleClick = () => {
        const id = text.toLowerCase();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        if (onClick) onClick();
    };

    return (
        <li
            onClick={handleClick}
            className={`transition-all font-semibold cursor-pointer hover:opacity-100 hover:scale-110 
                ${isActive ? "text-blue-500 opacity-100 scale-110" : "opacity-70 hover:text-blue-500"}`}
        >
            {text.charAt(0).toUpperCase() + text.slice(1)}
        </li>
    );
};
