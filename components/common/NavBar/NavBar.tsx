import {css} from '@emotion/react';
import Link from 'next/link';

const wrapper = css`
  display: flex;
  align-items: center;
  max-width: 1080px;
  height: 48px;
  padding: 0 8px;
  margin: 0 auto;
`;
export const NavBar: React.VFC = () => {
  return (
    <header css={wrapper}>
      <Link href="/">PRODUCT X</Link>
    </header>
  );
};
