import { Nunito } from "next/font/google";

import Layout from "../components/Layout";

import "../styles/styles.css";

const nunito = Nunito({ subsets: ["latin"] })

function defaultLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultLayout;
  return (
    <div className={`container max-w-2xl mx-auto text-lg p-3 ${nunito.className}`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default App;
