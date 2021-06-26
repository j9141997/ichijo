import {Nav} from '../Nav';

export const CommonLayout: React.FC = ({children}) => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <main>{children}</main>
    </>
  );
};
