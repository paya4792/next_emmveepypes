import Head from 'next/head';

interface MetaProps {
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string;
  pagePath?: string;
  pageImg?: string;
  pageImgWidth?: number;
  pageImgHeight?: number;
}
const Meta: React.FunctionComponent<MetaProps> = ({
  pageTitle,
  pageDescription,
  pageKeywords,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
}) => {
  const defaultTitle = 'えんびぱいぷす';
  const defaultDescription = 'えんびぱいぷすです';
  const defaultKeywords = 'えんびぱいぷす';

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const keywords = pageKeywords ? pageKeywords : defaultKeywords;
  const url = pagePath;
  const imgUrl = pageImg;
  const imgWidth = pageImgWidth ? pageImgWidth : 1280;
  const imgHeight = pageImgHeight ? pageImgHeight : 640;

  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="canonical" href={url} />
    </Head>
  );
};
export default Meta;
