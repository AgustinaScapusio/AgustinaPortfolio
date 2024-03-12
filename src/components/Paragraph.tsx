type ParagraphProps = {
    children:React.ReactNode;
    title:string;
    className:string;
}

export default function Paragraph({ children, title, className }: ParagraphProps) {
    return <>
    <div className={className}>
     <h4>{title}</h4>
     <p>{children}</p>
    </div>
    </>
}