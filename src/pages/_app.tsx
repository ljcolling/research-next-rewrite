import { type AppType } from "next/dist/shared/lib/utils";

import { Analytics } from '@vercel/analytics/react'
;

import "~/styles/globals.css";

import Layout from "../components/layout"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  <Analytics />
  </>
  );
};

export default MyApp;
