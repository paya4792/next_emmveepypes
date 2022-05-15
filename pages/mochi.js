import Link from "next/link";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/mmp/mmp.loader.js",
  dataUrl: "/mmp/mmp.data",
  frameworkUrl: "/mmp/mmp.framework.js",
  codeUrl: "/mmp/mmp.wasm",
});

export default function Home() {
  return (
    <>
      <h2>Mochi Mochi Place</h2>
      <Unity
        unityContext={unityContext}
        style={{
          height: 288,
          width: 512,
          border: "none",
          margin: "auto",
        }}
      />
      <h3>おすとふえます</h3>
      <Link href="/">もどる</Link>
    </>
  );
}
