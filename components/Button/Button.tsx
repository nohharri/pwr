export default function Button(props: {
    children: string,
    className?: string,
    onClick?: () => void,
}) {
    const { 
        children,
        className,
        onClick,
    } = props;
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}