import { Html, Main, NextScript, Head } from 'next/document';
import React from 'react'

const Document = () => {
  return (
    <Html>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


export default Document;