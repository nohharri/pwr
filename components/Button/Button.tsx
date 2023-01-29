export default function Button(props: {
    children: string,
    className?: string,
}) {
    const { 
        children,
        className,
    } = props;
    return (
        <button className={className}>
            {children}
        </button>
    );
}