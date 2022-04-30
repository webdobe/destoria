import React, { createContext, useState, useCallback, useEffect, FunctionComponent } from "react";


interface IDropDownContext {
  registerOption: (param: any) => void
  updateOptionProps: any
  getOptionById: any
  deleteOptionById: any
  options: any 
  targetId: any 
  setTargetId: any
  cachedId: any
  setCachedId: any
}

interface IItems {
  id: 'string' | number
  optionDimensions: any
  optionCenterX: any
  WrappedContent: any
  backgroundHeight: any
  optionId: any
  backgroundWidth: any
}

export const Context = createContext<IDropDownContext>(null);

export const DropdownProvider: FunctionComponent = ({ children }) => {
  const [options, setOptions] = useState([]);
  const [targetId, setTargetId] = useState(null);
  const [cachedId, setCachedId] = useState(null);

  const registerOption = useCallback(
    ({
      id,
      optionDimensions,
      optionCenterX,
      WrappedContent,
      backgroundHeight,
      backgroundWidth
    }) => {
      setOptions((items: IItems) => [
        ...items,
        {
          id,
          optionDimensions,
          optionCenterX,
          WrappedContent,
          backgroundHeight,
          backgroundWidth
        },
      ]);
    },
    [setOptions]
  );

  const updateOptionProps = useCallback(
    (optionId, props) => {
      setOptions((items) =>
        items.map((item) => {
          if (item.id === optionId) {
            item = { ...item, ...props };
          }

          return item;
        })
      );
    },
    [setOptions]
  );

  const getOptionById = useCallback(
    (id) => options.find((item) => item.id === id),
    [options]
  );

  const deleteOptionById = useCallback(
    (id) => {
      setOptions((items) => items.filter((item) => item.id !== id));
    },
    [setOptions]
  );

  useEffect(() => {
    if (targetId !== null) setCachedId(targetId);
  }, [targetId]);

  return (
    <Context.Provider
      value={{
        registerOption,
        updateOptionProps,
        getOptionById,
        deleteOptionById,
        options,
        targetId,
        setTargetId,
        cachedId,
        setCachedId,
      }}
    >
      {children}
    </Context.Provider>
  );
}
