import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/layout';
import { theme } from '../styles/theme/theme';
import Meta from '../utils/meta';

export default function Home() {
  return (
    <>
      <Meta pageTitle="えんびぱいぷす" />

      <Section>
        <Container>
          <StyledH2 id="games">Games</StyledH2>
          <StyledP>
            作成したゲームたちです。ブラウザで遊べるものとかがあります。
          </StyledP>
          <CardGrid>
            <Link href="/mochi">
              <Card>
                <CardHeader>
                  <CardIcon>
                    <Image
                      alt="えんびぱいぷすロゴ"
                      src="/images/logo_192.png"
                      width="100%"
                      height="100%"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </CardIcon>
                  <CardHeaderTitle>Mochi Mochi Place</CardHeaderTitle>
                </CardHeader>
                <CardCopy>
                  ブラウザで遊べる(?)2Dゲームです。ゲーム内容は未定です。
                </CardCopy>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardHeader>
                  <CardIcon>
                    <Image
                      alt="えんびぱいぷすロゴ"
                      src="/images/logo_192.png"
                      width="100%"
                      height="100%"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </CardIcon>
                  <CardHeaderTitle>？？？</CardHeaderTitle>
                </CardHeader>
                <CardCopy>Coming soon...?</CardCopy>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardHeader>
                  <CardIcon>
                    <Image
                      alt="えんびぱいぷすロゴ"
                      src="/images/logo_192.png"
                      width="100%"
                      height="100%"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </CardIcon>
                  <CardHeaderTitle>？？？</CardHeaderTitle>
                </CardHeader>
                <CardCopy>Coming soon...?</CardCopy>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardHeader>
                  <CardIcon>
                    <Image
                      alt="えんびぱいぷすロゴ"
                      src="/images/logo_192.png"
                      width="100%"
                      height="100%"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </CardIcon>
                  <CardHeaderTitle>？？？</CardHeaderTitle>
                </CardHeader>
                <CardCopy>Coming soon...?</CardCopy>
              </Card>
            </Link>
          </CardGrid>
        </Container>
      </Section>
      <Section>
        <Container>
          <StyledH2 id="about">About</StyledH2>
          <StyledP>
            作成したゲームたちを置くサイトにするつもりです。鋭意制作中です。
          </StyledP>
        </Container>
      </Section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const StyledH2 = styled.h2`
  color: ${theme.colors.headline};
  ${({ theme }) => theme.breakpoint.base`
    font-size: ${theme.fonts.size.xxxl};
  `}
  ${({ theme }) => theme.breakpoint.sm`
    font-size: ${theme.fonts.size.xxxl};
  `}
  ${({ theme }) => theme.breakpoint.md`
    font-size: ${theme.fonts.size.xxxl};
  `}
  ${({ theme }) => theme.breakpoint.lg`
    font-size: ${theme.fonts.size.xxxl};
  `}
  ${({ theme }) => theme.breakpoint.xl`
    font-size: ${theme.fonts.size.xxxl};
  `}
`;

const StyledP = styled.p`
  padding-top: 2rem;
  color: ${theme.colors.paragraph};
  font-size: ${theme.fonts.size.lg};
`;

const Section = styled.section`
  width: 100%;
  background-color: ${theme.colors.contentBackground};
  padding: 10rem 2rem 10rem;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

const CardGrid = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
`;
const Card = styled.div`
  padding: 4rem;
  border-radius: 3px;
  background-color: ${theme.colors.background};
  cursor: pointer;
`;

const CardHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding-top: 0px;
  align-items: center;
`;

const CardIcon = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  max-width: 70px;
  max-height: 70px;
  margin-right: 1rem;
`;

const CardHeaderTitle = styled.h3`
  margin-bottom: 0rem;
  margin-top: 0rem;
  color: ${theme.colors.headline};
  font-size: ${theme.fonts.size.xxl};
`;

const CardCopy = styled.p`
  padding-top: 2rem;
  font-size: ${theme.fonts.size.lg};
`;
