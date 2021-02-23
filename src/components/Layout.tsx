import React, { FC } from 'react';

const Layout: FC = ({ children }) => (
  <main className="h-screen bg-primary">
    <div className="flex flex-row w-screen">
      <div className="w-full pt-14">
        <div className="flex h-full mr-10 rounded-md bg-quaternary">
          <div className="w-full m-10">{children}</div>
        </div>
      </div>
    </div>
  </main>
);

export default Layout;
