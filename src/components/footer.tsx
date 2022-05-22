import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme/theme';

export function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <StyledFooter>
        <FooterContentWrapper>
          <FooterLeftArea>
            <FooterLeftInner>
              <FooterBannerArea>
                <Image
                  alt="えんびぱいぷすロゴ"
                  src="/images/logo_192.png"
                  width="100%"
                  height="100%"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </FooterBannerArea>
              <FooterBannerText>えんびぱいぷす</FooterBannerText>
              <FooterLeftText>インターネットのどこか</FooterLeftText>
            </FooterLeftInner>
          </FooterLeftArea>
          <FooterRightArea>
            <FooterContentsNav>
              <FooterContentsList>
                <FooterContent>
                  <span>プライバシーポリシー</span>
                </FooterContent>
                <FooterContent>
                  <span>本サイトについて</span>
                </FooterContent>
                <FooterContent>
                  <span>Twitter</span>
                </FooterContent>
                <FooterContent>
                  <span>E-Mail</span>
                </FooterContent>
              </FooterContentsList>
            </FooterContentsNav>
          </FooterRightArea>
        </FooterContentWrapper>
        <CopyRight>COPYRIGHT © えんびぱいぷす All rights Reserved.</CopyRight>
      </StyledFooter>
    </ThemeProvider>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  background: ${theme.colors.background};

  padding: 0;
`;

const FooterBannerArea = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  max-width: 50%;
  max-height: 120px;
`;

const FooterBannerText = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 17px;
  text-align: center;
  display: inline-block;
  margin-bottom: 0;
  position: relative;
  text-align: left;
  vertical-align: middle;
`;

const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

const FooterLeftArea = styled.div`
  width: 50%;
  background: url('/images/footer_bg.jpg') center / 100% 100%;
  padding: 50px 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterLeftInner = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 500px;
`;

const FooterLeftText = styled.p`
  color: ${theme.colors.headline};
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 17px;
  text-align: center;
  display: inline-block;
  margin-bottom: 0;
  margin-left: 20px;
  padding-left: 20px;
  position: relative;
  text-align: left;
  vertical-align: middle;
  &::before {
    background-color: #fff;
    bottom: 0;
    content: '';
    height: 30px;
    left: 0;
    margin: auto;
    position: absolute;
    top: 0;
    width: 1px;
  }
`;

const FooterRightArea = styled.div`
  width: 50%;
`;

const FooterContentsNav = styled.nav`
  display: block;
`;

const FooterContentsList = styled.ul`
  margin: 1rem 0 0 1rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const FooterContent = styled.li`
  display: flex;
  width: 49%;
  height: 49%;
  margin-right: 0.8%;
  margin-bottom: 0.5rem;
  padding: 2rem 2rem;
  justify-content: space-between;
  border: 3px solid ${theme.colors.border};
  border-radius: 5px;
  cursor: pointer;
  color: ${theme.colors.headline};
  font-size: ${theme.fonts.size.base};
  font-weight: bolder;
  text-align: -webkit-match-parent;
  text-shadow: 2px 2px 2px ${theme.colors.textStroke},
    -2px -2px 2px ${theme.colors.textStroke},
    -2px 2px 2px ${theme.colors.textStroke},
    2px -2px 2px ${theme.colors.textStroke};
  &:hover {
    box-shadow: inset 320px 0 0 0 ${theme.colors.link};
    background-color: ${theme.colors.linkHover};
    text-shadow: unset;
    border: 3px solid ${theme.colors.borderHover};
  }
  transition: color 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
`;

const CopyRight = styled.div`
  padding: 2rem 0;
  color: ${theme.colors.paragraph};
  font-size: ${theme.fonts.size.base};
  text-align: center;
`;
