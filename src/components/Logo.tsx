type Props = {
   size?: number;
   className?: string;
};

const Logo = (props: Props) => {
   const { size = 30 } = props;

   return <img {...props} src="../../public/logo.svg" alt="Logo" height={size} width={size} />;
};

export default Logo;