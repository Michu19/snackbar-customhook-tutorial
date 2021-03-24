import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const usePortal = () => {
  const [rootElement, setRootElement] = useState<HTMLDivElement | undefined>();
  const [container, setContainer] = useState<HTMLDivElement | undefined>();

  useEffect(() => {
    setRootElement(
      document.getElementById(`snackbarModal-root`) as HTMLDivElement,
    );
  }, []);

  useEffect(() => {
    let elem: HTMLDivElement;

    if (rootElement) {
      elem = document.createElement(`div`) as HTMLDivElement;
      setContainer(elem);
      rootElement.appendChild(elem);
      rootElement.style.position = `absolute`;
      rootElement.style.zIndex = `99999`;
      rootElement.style.left = `1%`;
      rootElement.style.bottom = `5%`;
      document.body.style.overflow = `hidden`;
    } else {
      setContainer(undefined);
      document.body.style.overflow = `auto`;
    }

    return () => {
      if (elem) {
        rootElement?.removeChild(elem);
        document.body.style.overflow = `auto`;
      }
    };
  }, [rootElement]);

  return container;
};

export const SnackbarModal: FC = ({ children }) => {
  const portal = usePortal();
  if (!portal) return null;
  return createPortal(children, portal);
};
