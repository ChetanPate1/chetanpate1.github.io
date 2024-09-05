// Core
import React from 'react';

type Props = {
   children: React.ReactNode;
};

const Container = ({ children }: Props) => {
   return (
      <div className="px-10">
         {children}
      </div>
   );
};

export default Container;