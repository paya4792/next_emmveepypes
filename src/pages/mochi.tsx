import Link from 'next/link';
import Unity, { UnityContext } from 'react-unity-webgl';

import Meta from '../utils/meta';

const unityContext = new UnityContext({
  loaderUrl: '/mmp/Build.loader.js',
  dataUrl: '/mmp/Build.data',
  frameworkUrl: '/mmp/Build.framework.js',
  codeUrl: '/mmp/Build.wasm',
});

export default function Home() {
  return (
    <>
      <Meta pageTitle="もち" />
      <h2>Mochi Mochi Place</h2>
      <Unity
        unityContext={unityContext}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 'auto',
        }}
      />
      <h3>おすとふえます</h3>
      <Link href="/">もどる</Link>
    </>
  );
}
