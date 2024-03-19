import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManufacturerPros {
    manufacturer: String;
    setManufacturer: (manufacturer: string) => void
}

export interface CafeProps {
    id: number,
    nombre: string,
    precio: number,
    imagen: string,
    categoria: string,
    transimission:string
}