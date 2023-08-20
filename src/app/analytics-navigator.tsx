'use client';

import {
  FC,
  Suspense,
  useEffect,
} from "react";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";

const AnalyticsNavigator: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const gaMeasureId = process.env.NEXT_PUBLIC_GA_MEASURE_ID;
    if (gaMeasureId != null) {
      (window as any).gtag('event', 'page_view');
    }
  }, [pathname, searchParams]);
  return null;
};

export const TrackingPageviews: FC = () => {
  return (
    <Suspense fallback={null}>
      <AnalyticsNavigator />
    </Suspense>
  );
};
