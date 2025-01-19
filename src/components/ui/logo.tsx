import Image from 'next/image';

type Props = {
   size?: number;
   className?: string;
};

const Logo = (props: Props) => {
   const { size = 30 } = props;

   return <Image {...props} src="./logo.svg" alt="Logo" height={size} width={size} />;
};

export { Logo };