import React from "react";

export const createContext = <T,>(
  name: string
): [() => T, React.Provider<T>] => {
  const context = React.createContext<T | null>(null);
  const useProvider = (): T => {
    const contextValue = React.useContext(context);
    if (contextValue === null)
      throw new Error(
        `use${name}Provider must be used within a ${name}Provider`
      );
    return contextValue;
  };
  return [useProvider, context.Provider as React.Provider<T>];
};
