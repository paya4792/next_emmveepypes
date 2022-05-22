import Unity, { UnityContext } from 'react-unity-webgl';
import styled from 'styled-components';

import Layout from '../components/layout';
import { theme } from '../styles/theme/theme';
import Meta from '../utils/meta';

const unityContext = new UnityContext({
  loaderUrl: '/mmp/Build.loader.js',
  dataUrl: '/mmp/Build.data',
  frameworkUrl: '/mmp/Build.framework.js',
  codeUrl: '/mmp/Build.wasm',
});

export default function Mochi() {
  return (
    <>
      <Meta pageTitle="もち" />

      <Section>
        <Container>
          <StyledH2>Mochi Mochi Place</StyledH2>
          <StyledP>
            作成したゲームたちです。ブラウザで遊べるものとかがあります。
          </StyledP>
          <GameAreaWrapper>
            <GameWrapper>
              <Unity
                unityContext={unityContext}
                style={{
                  height: '100%',
                  width: '100%',
                  border: 'none',
                  margin: 'auto',
                  display: 'flex',
                }}
              />
            </GameWrapper>
            <DescriptionWrapper>
              <Description>ジャンプとかできます</Description>
            </DescriptionWrapper>
          </GameAreaWrapper>
        </Container>
      </Section>
    </>
  );
}

Mochi.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const StyledH2 = styled.h2`
  color: ${theme.colors.headline};
  ${({ theme }) => theme.breakpoint
    .base`    font-size: ${theme.fonts.size.xxxl};
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

const GameAreaWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const GameWrapper = styled.div`
  width: 70%;
  border: 2px solid ${theme.colors.borderHover};
`;

const DescriptionWrapper = styled.div`
  width: 30%;
  border: 2px solid ${theme.colors.borderHover};
  border-left: none;
`;

const Description = styled.p`
  padding: 2rem;
  color: ${theme.colors.paragraph};
  font-size: ${theme.fonts.size.base};
`;
