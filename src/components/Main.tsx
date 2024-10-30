import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Separator } from "./ui/separator"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const syndicates = [
    "All",
    "Steel Meridian",
    "Arbiters of Hexis",
    "Cephalon Suda",
    "The Perrin Sequence",
    "Red Veil",
    "New Loka",
    "Conclave",
    "Ostron",
    "Solaris United",
    "Entrati",
    "Ventkids",
    "Roky",
    "Nightwave",
]
  
export default function Main() {
    const [syndicate, setSyndicate] = useState("All");
    const [selectedRow, setSelectedRow] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement>, rowId: string) => {
        setSelectedRow((prev) => (prev === rowId ? null : rowId));

        if (selectedRow !== null) {
            setSelectedItem(null);
            return
        }
        const firstCell = event.currentTarget.querySelector("td");
        if (firstCell) {
            setSelectedItem(firstCell.textContent || null);
        }
    };

    return (
        <div className="flex flex-1">
            <div className="w-1/2">
                <div className="p-2 pl-4 flex">
                    <div className="flex items-center gap-4">
                        <Label className="text-lg">Syndicate:</Label>
                        <p className="text-lg">{syndicate}</p>
                    </div>
                    <div className="flex-1"></div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="font-semibold">
                            <Button variant="outline">Change</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {syndicates.map((syndicate) => (
                                <DropdownMenuItem key={syndicate} onClick={() => setSyndicate(syndicate)}>
                                    {syndicate}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Separator />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Standing</TableHead>
                            <TableHead>Syndicate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="cursor-pointer" onClick={(event) => handleRowClick(event, "row1")} data-state={selectedRow === "row1" ? "selected" : undefined}>
                            <TableCell className="font-medium">Bite</TableCell>
                            <TableCell>Mod</TableCell>
                            <TableCell>21000</TableCell>
                            <TableCell>Steel Meridian</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <Separator orientation="vertical" />
            <div className="w-1/2 flex flex-col">
                <h2 className="text-lg font-semibold flex justify-center h-14 items-center">
                    {selectedItem}
                </h2>
                <Separator />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Seller</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Rank</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Bite</TableCell>
                            <TableCell>Sootax</TableCell>
                            <TableCell>67</TableCell>
                            <TableCell>5/5</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}