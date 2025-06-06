type Props = {
    text: string
}

export const LiNav = ({ text }: Props) => {
    return (
        <li
            className="transition-all font-semibold cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 hover:text-blue-500"
        >{text}</li>
    );
}