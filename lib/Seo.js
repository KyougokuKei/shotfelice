import Head from "next/head";

const Seo = ({ pageTitle, noIndex }) => {
  const title = "Shotfelice - ショットフェリーチェ(池田公彦）";
  const description =
    "写真撮影ならShotFelice(ショットフェリーチェ)。簡単ネット予約で、撮影担当の池田公彦が出張撮影いたします！フォトウエディング、人物撮影、アウトドア、どんな撮影であっても承ります。";
  const sub_description =
    "簡単ネット予約！出張撮影ならShotFelice(ショットフェリーチェ)";
  const url = "https://shotfelice.vercel.app/";
  const imgUrl = "https://shotfelice.vercel.app/img/general/ogp_image.png";
  const imgWidth = 900;
  const imgHeight = 560;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:locale:alternate" content="ja_JP" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={sub_description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      {noIndex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
