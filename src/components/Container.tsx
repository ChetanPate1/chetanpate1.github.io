// Core
import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
   children: React.ReactNode;
   className?: string;
};

const Container = ({ children, className }: Props) => (
   <div className={cn('pt-24 md:pl-36 md:pr-7 pb-32 lg:pb-5', className)}>
      {children}
   </div>
);


export default Container;