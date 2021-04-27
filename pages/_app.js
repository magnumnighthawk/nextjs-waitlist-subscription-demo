import Head from "next/head";
import GlobalStyles, { AppWrapper, StyledBody } from "lib/global-styles";
import Header from "components/header";
import Footer from "components/footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Get tickets</title>
        <meta name="description" content="Join waitlist" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppWrapper>
        <Header />
        <StyledBody>
          <Component {...pageProps} />
        </StyledBody>
        <Footer />
      </AppWrapper>
    </>
  );
}
