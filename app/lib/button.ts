export type ButtonVariant="primary" | "secondary" | "skills-light" | "skills-dark" | "size-active";

export interface ButtonProps{
    variant: ButtonVariant;
    onClick:()=>void;
    children: React.ReactNode;
    className?: string;
}