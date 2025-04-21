import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="uppercase font-bold m-4 text-black hover:text-white border border-lime-500 bg-white hover:bg-gray-500 py-2 px-10 cursor-pointer transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
