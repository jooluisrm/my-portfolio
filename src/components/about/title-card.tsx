type Props = {
    text: string
}

export const TitleCard = ({text}: Props) => {
    return (
        <h1 className="pb-10 text-2xl text-center font-bold ">{text}</h1>
    );
}