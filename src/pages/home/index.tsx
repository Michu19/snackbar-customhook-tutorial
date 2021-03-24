import {
  TypeNotification,
  useSnackbar,
} from '@feature/hooks/useSnackbarContext';
import { Layout, PageComponent } from '../_app';

const UsersHome: PageComponent = () => {
  const openSnackbar = useSnackbar();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          openSnackbar(
            `Konto administratora zostało pomyślnie utworzone.`,
            TypeNotification.Success,
          );
        }}
      >
        Trololo
      </button>
      Users home
    </div>
  );
};
UsersHome.Layout = Layout;

export default UsersHome;
