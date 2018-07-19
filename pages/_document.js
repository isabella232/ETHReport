import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>ETH REPORT 2018 | ETH PRIZE</title>
          <meta name="description" content="We've interviewed 100+ developers to showcase the biggest opportunities in the Ethereum ecosystem" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="_next/static/style.css" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link href="//fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="57x57" href="static/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="static/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="static/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="static/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="static/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="static/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="static/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="static/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="static/icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="static/icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="static/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="static/icons/favicon-16x16.png" />
          <link rel="manifest" href="static/icons/manifest.json" />
          <link rel="shortcut icon" href="static/icons/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
