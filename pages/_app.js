import { LoadProvider } from "@/components/context/LoadContext";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function App({ Component, pageProps }) {
  return (
    <LoadProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoadProvider>
  );
}
