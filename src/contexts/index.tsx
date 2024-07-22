// ModalContext.tsx

import React, { ReactNode, createContext, useContext, useReducer } from "react";
import BrandLogo from "../assets/logo.png";

// Define your initial state
interface GlobalState {
  isModalOpen?: boolean;
  name?: string;
  body?: string;
  address?: string;
  toastOpen?: boolean;
  modalLogo?: string;
}

export const setModal = (
  isModalOpen: boolean = false,
  name: string = "",
  address: string = "",
  body: string = "",
  modalLogo: string = BrandLogo
): Action => ({
  type: ActionType.SET_MODAL,
  values: {
    isModalOpen,
    name,
    address,
    body,
    modalLogo,
  },
});

export const setToast = (toastOpen: boolean = false): Action => ({
  type: ActionType.SET_TOAST,
  values: {
    toastOpen,
  },
});

export const setModalLogo = (logo: string = BrandLogo): Action => ({
  type: ActionType.SET_MODAL_LOGO,
  values: {
    modalLogo: logo,
  },
});

// Define your actions
enum ActionType {
  SET_MODAL,
  SET_TOAST,
  SET_MODAL_LOGO,
}

type Action = { type: ActionType; values: GlobalState };

// Create your reducer
function modalReducer(state: GlobalState, action: Action): GlobalState {
  switch (action.type) {
    case ActionType.SET_MODAL:
      return { ...state, ...action.values };
    case ActionType.SET_TOAST:
      return { ...state, ...action.values };
    case ActionType.SET_MODAL_LOGO:
      return { ...state, ...action.values };
    default:
      return state;
  }
}

// Create the context
const GlobalContext = createContext<
  { state: GlobalState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

// Create the provider
export const GlobalProvider: React.FC<{
  children?: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    isModalOpen: false,
    toastOpen: false,
    modalLogo: BrandLogo,
  });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to access the context
export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useModal must be used within a GlobalProvider");
  }
  return context;
}
