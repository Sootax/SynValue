import { useState } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Settings from "./components/Settings";
import { Separator } from "./components/ui/separator";

export default function App() {
    const [settingsTab, setSettingsTab] = useState(false);
    return (
        <div className="flex flex-col h-screen">
            <Navigation setSettingsTab={setSettingsTab} />
            <Separator />
            {settingsTab ? <Settings /> : <Main />}
        </div>
    )
}
