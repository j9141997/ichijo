import {Footer} from '../Footer';
import {NavBar} from '../NavBar';

export interface Props {
  children: React.ReactNode;
}

export const BaseLayout: React.VFC<Props> = ({children}) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
