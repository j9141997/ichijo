import {Footer} from '../Footer';
import {Nav} from '../Nav';

export interface Props {
  children: React.ReactNode;
}

export const BaseLayout: React.VFC<Props> = ({children}) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
