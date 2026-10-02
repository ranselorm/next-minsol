// context/ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define context value type
interface ModalContextType {
  isOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => setIsOpen(true);
  const closeSheet = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openSheet,
        closeSheet,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook for accessing modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
