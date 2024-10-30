import { IoMdSettings } from "react-icons/io";

interface NavigationProps {
    setSettingsTab: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({ setSettingsTab }: NavigationProps) {
    const handleClick = () => {
        setSettingsTab((prev) => !prev);
    };

    return (
        <nav className="flex p-4 h-12 items-center justify-between">
            <h1 className="font-bold text-xl">SynValue</h1>
            <IoMdSettings className="text-xl hover:opacity-70 cursor-pointer" onClick={handleClick} />
        </nav>
    );
}
