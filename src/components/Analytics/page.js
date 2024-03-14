import React from 'react';

import Script from 'next/script';

function GoogleAnalytics({ ga_id }) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}
      ></Script>
      <Script
        id='google-analytics'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
        }}
      ></Script>
    </>
  );
}

export default GoogleAnalytics;
