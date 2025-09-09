export type ButtonVariant="primary" | "secondary" | "skills-light" | "skills-dark" | "header-light"|"skills-light-2"|"skills-dark-2";

export interface ButtonProps{
    variant: ButtonVariant;
    onClick:()=>void;
    children: React.ReactNode;
    className?: string;
}