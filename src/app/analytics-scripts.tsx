import Script from "next/script";
import {
  FC,
} from "react";
import {
  TrackingPageviews,
} from "./analytics-navigator";

export const AnalyticsScripts: FC = () => {
  const gaMeasureId = process.env.NEXT_PUBLIC_GA_MEASURE_ID;
  if (gaMeasureId == null) {
    return null;
  }
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasureId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${gaMeasureId}', { send_page_view: false });
        `}
      </Script>
      <TrackingPageviews />
    </>
  );
};
