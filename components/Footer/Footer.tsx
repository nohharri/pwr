import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <div className="flex align-middle bg-primary-dark m-auto p-20 justify-center dark:filter-white">
            <Image className="filter-white" width={60} height={60} alt="logo" src="/logo.svg" />
            </div>
        </div>
    )
}