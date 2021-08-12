import {css} from '@emotion/react';
import Link from 'next/link';
import {Space} from '../../../styles/variables';
import {Logo} from '../Logo/Logo';

const wrapper = css`
  display: flex;
  align-items: center;
  max-width: 1080px;
  height: 48px;
  padding: 0 ${Space * 2}px;
  margin: 0 auto;
`;

export const NavBar: React.VFC = () => {
  return (
    <header css={wrapper}>
      <Link href="/" passHref>
        <Logo />
      </Link>
    </header>
  );
};
