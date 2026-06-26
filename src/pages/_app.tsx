import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ModalProvider } from "@/context/ModalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactModal from "@/components/ContactModal";
import { Analytics } from "@vercel/analytics/next";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <ModalProvider>
          <Navbar />
          <Component {...pageProps} />
          <Analytics />
          <ContactModal />
          <Footer />
        </ModalProvider>
      </QueryClientProvider>
    </>
  );
}
