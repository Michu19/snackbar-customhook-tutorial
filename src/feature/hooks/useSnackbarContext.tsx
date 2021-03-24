import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

export enum TypeNotification {
  Success = `success`,
  Pending = `pending`,
  Error = `error`,
}
type SnackbarItem = {
  id: string;
  information: string;
  type: TypeNotification;
};
type SnackbarProps = {
  activeItems: SnackbarItem[];
  message: string;
  openSnackbar: (information: string, snackbarType: TypeNotification) => void;
  closeSnackbar: (id: string) => void;
};

const SnackbarContext = createContext<SnackbarProps>({
  activeItems: [],
  message: ``,
  openSnackbar: () => null,
  closeSnackbar: () => null,
});

export const useSnackbarContext = (): SnackbarProps =>
  useContext(SnackbarContext);

export const useSnackbar = () => {
  const { openSnackbar } = useContext(SnackbarContext);
  return openSnackbar;
};
export const SnackbarProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [activeItems, setActiveItems] = useState<SnackbarItem[]>([]);
  const [message, setMessage] = useState(``);

  useEffect(() => {
    if (activeItems.length > 0) {
      const timer = setInterval(() => {
        setActiveItems((activeItem) => activeItem.slice(1));
      }, 55555);

      return () => {
        clearInterval(timer);
      };
    }
  }, [activeItems]);

  const openSnackbar = (
    information: string,
    snackbarType: TypeNotification,
  ) => {
    setMessage(information);
    const uniqueActiveItems = _.uniqBy(
      [
        ...activeItems,
        {
          id: uuidv4(),
          information,
          type: snackbarType,
        },
      ],
      `id`,
    );
    setActiveItems(uniqueActiveItems);
  };

  const closeSnackbar = (id: string) =>
    setActiveItems([...activeItems.filter((item) => item.id !== id)]);

  return (
    <SnackbarContext.Provider
      value={{
        activeItems,
        message,
        openSnackbar,
        closeSnackbar,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
