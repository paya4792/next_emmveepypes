import Image from 'next/image';
import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme/theme';

export function Header() {
  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <HeaderContentWrapper>
          <StyledH1>
            <Link
              href={{
                pathname: '/',
              }}
            >
              <HeaderBannerArea>
                <Image
                  alt="えんびぱいぷす"
                  src="/images/banner.png"
                  width="100%"
                  height="100%"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </HeaderBannerArea>
            </Link>
          </StyledH1>
          <HeaderContentsNav>
            <HeaderContentsList>
              <HeaderContent>
                <Link href="/#games">Games</Link>
              </HeaderContent>
              <HeaderContent>
                <Link href="/#about">About</Link>
              </HeaderContent>
            </HeaderContentsList>
          </HeaderContentsNav>
        </HeaderContentWrapper>
      </StyledHeader>
    </ThemeProvider>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  background: ${theme.colors.background};

  padding: 2rem 0;
`;

const StyledH1 = styled.h1`
  height: 80px;
`;

const HeaderBannerArea = styled.div`
  position: relative;
  ${({ theme }) => theme.breakpoint.base`
    width: 280px;
    height: 56px;
    max-width: 280px;
    max-height: 56px;
  `}
  ${({ theme }) => theme.breakpoint.sm`
    width: 320px;
    height: 72px;
    max-width: 320px;
    max-height: 72px;
  `}
  ${({ theme }) => theme.breakpoint.md`
    width: 400px;
    height: 80px;
    max-width: 400px;
    max-height: 80px;
  `}
  ${({ theme }) => theme.breakpoint.lg`
    width: 400px;
    height: 80px;
    max-width: 400px;
    max-height: 80px;
  `}
  ${({ theme }) => theme.breakpoint.xl`
    width: 400px;
    height: 80px;
    max-width: 400px;
    max-height: 80px;
  `}
    cursor: pointer;
`;

const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const HeaderContentsNav = styled.nav`
  display: block;
`;

const HeaderContentsList = styled.ul`
  display: flex;
`;

const HeaderContent = styled.li`
  justify-content: flex-end;
  color: ${theme.colors.link};
  font-weight: bolder;
  text-align: -webkit-match-parent;
  text-shadow: 2px 2px 2px ${theme.colors.textStroke},
    -2px -2px 2px ${theme.colors.textStroke},
    -2px 2px 2px ${theme.colors.textStroke},
    2px -2px 2px ${theme.colors.textStroke};
  padding-left: 2rem;

  ${({ theme }) => theme.breakpoint.base`
    display: none;
  `}
  ${({ theme }) => theme.breakpoint.sm`
    display: list-item;
    font-size: ${theme.fonts.size.xl};
  `}
  ${({ theme }) => theme.breakpoint.md`
    display: list-item;
    font-size: ${theme.fonts.size.xxl};
  `}
  ${({ theme }) => theme.breakpoint.lg`
    display: list-item;
    font-size: ${theme.fonts.size.xxl};
  `}
  ${({ theme }) => theme.breakpoint.xl`
    display: list-item;
    font-size: ${theme.fonts.size.xxl};
  `}
`;
