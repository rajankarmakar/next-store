import Script from 'next/script';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Nagadhat",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet" precedence="default" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" precedence="default" />
      <link rel="stylesheet" href="/css/slick.css" precedence="default" />
      <link rel="stylesheet" href="/css/slick-theme.css" precedence="default" />
      <link rel="stylesheet" href="/css/brand.css" precedence="default" />
      <link rel="stylesheet" href="/css/category.css" precedence="default" />
      <link rel="stylesheet" href="/css/flash-sale.css" precedence="default" />
      <link rel="stylesheet" href="/css/footer.css" precedence="default" />
      <link rel="stylesheet" href="/css/header.css" precedence="default" />
      <link rel="stylesheet" href="/css/hero-banner.css" precedence="default" />
      <link rel="stylesheet" href="/css/just-for.css" precedence="default" />
      <link rel="stylesheet" href="/css/partner.css" precedence="default" />
      <link rel="stylesheet" href="/css/service.css" precedence="default" />
      <link rel="stylesheet" href="/css/home.css" precedence="default" />
      <link rel="stylesheet" href="/css/common.css" precedence="default" />
      <link rel="stylesheet" href="/css/responsive.css" precedence="default" />
      <Script strategy="afterInteractive" src="/js/jquery.min.js" />
      <Script strategy="afterInteractive" src="/js/bootstrap.bundle.min.js" />
      <Script strategy="afterInteractive" src="/js/slick.min.js" />
      <Script strategy="afterInteractive" src="/js/custom.js" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
