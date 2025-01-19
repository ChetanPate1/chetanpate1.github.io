type Props = {
   size?: number;
   className?: string;
};

const Logo = (props: Props) => {
   const { size = 30 } = props;

   return <img {...props} src="./logo.svg" alt="Logo" height={size} width={size} />;
};

export { Logo };