import React, { FC } from 'react';
import cx from 'classnames';
import {
  TypeNotification,
  useSnackbarContext,
} from '@feature/hooks/useSnackbarContext';
import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SnackbarModal } from '@feature/hooks/usePortal';

config.autoReplaceSvg = false;
config.autoAddCss = true;

const icon = (type: TypeNotification) => {
  const record: Record<TypeNotification, IconDefinition> = {
    [TypeNotification.Error]: faExclamationTriangle,
    [TypeNotification.Pending]: faInfoCircle,
    [TypeNotification.Success]: faCheckCircle,
  };
  return (
    <FontAwesomeIcon
      className="text-white"
      size="lg"
      color="white"
      icon={record[type]}
    />
  );
};

export const Snackbar: FC = (): JSX.Element => {
  const { activeItems, closeSnackbar } = useSnackbarContext();
  console.log(activeItems);
  return (
    <>
      {activeItems?.length > 0 &&
        activeItems.map((item) => (
          <SnackbarModal key={item.id}>
            <button
              type="button"
              className={cx(
                `w-full h-16 flex shadow-xl cursor-default text-white focus:outline-none outline-none items-center rounded-lg mx-3 my-1 `,
                {
                  'bg-red-400': item.type === TypeNotification.Error,
                  'bg-yellow-400': item.type === TypeNotification.Pending,
                  'bg-green-400': item.type === TypeNotification.Success,
                },
              )}
            >
              <div className="ml-6">{icon(item.type)}</div>
              <div className="flex items-center justify-between w-full">
                <div
                  key={item.information}
                  className="relative mx-3 text-center"
                >
                  {item.information}
                </div>
                <FontAwesomeIcon
                  className="mr-6 cursor-pointer"
                  onClick={() => closeSnackbar(item.id)}
                  size="sm"
                  color="white"
                  icon={faTimes}
                />
              </div>
            </button>
          </SnackbarModal>
        ))}
    </>
  );
};
