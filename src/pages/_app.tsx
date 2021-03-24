import { AppProps } from 'next/app';
import '@assets/css/main.css';
import { SnackbarProvider } from '@feature/hooks/useSnackbarContext';
import { Snackbar } from '@components/snackbar/snackbar';
import { NextPage } from 'next';
import { FC } from 'react';

export type PageComponent<P = unknown> = NextPage<P> & {
  Layout?: FC;
};

const Noop: FC = ({ children }) => <>{children}</>;

export const Layout: FC = ({ children }) => <div>{children}</div>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as PageComponent).Layout || Noop;

  return (
    <>
      <SnackbarProvider>
        <div id="snackbarModal-root" />
        <Snackbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </>
  );
}
