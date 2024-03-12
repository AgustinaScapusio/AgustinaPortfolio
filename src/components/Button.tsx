type ButtonProps = {
    text: string;
    onClick: () => void;
}


export default function Button({ text, onClick }: ButtonProps) {
    return (
        <p onClick={onClick}>{text}</p>
    );
}