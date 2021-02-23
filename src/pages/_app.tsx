import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { FC } from 'react';
import '@assets/css/main.css';

export type PageComponent<P = unknown> = NextPage<P> & {
  Layout?: FC;
};

const Noop: FC = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as PageComponent).Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
