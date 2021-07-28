export interface Props extends React.ComponentPropsWithRef<'button'> {
  children: React.ReactNode;
}

export const Button: React.VFC<Props> = ({children, ...props}) => {
  return <button {...props}>{children}</button>;
};
