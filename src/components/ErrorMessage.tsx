import { PropsWithChildren, ReactNode } from "react";

// Definir la interfaz para las props
interface ErrorMessageProps
  extends PropsWithChildren<{
    children?: ReactNode | string | undefined; // children puede ser ReactNode, string o undefined
  }> {}

function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
      {children}
    </div>
  );
}

export default ErrorMessage;
