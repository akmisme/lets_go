import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AOSInit from "../components/AOS";
import { notFound } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // only include what you need
});

export const metadata = {
  title: "Golden Yellow International Travel",
  // description: "Traveling Throughout Myanmar Site",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const currentLocale = locale || "en";

  let messages;
  try {
    messages = (await import(`../../messages/${currentLocale}.json`)).default;
  } catch (error) {
    console.error("Missing locale file:", currentLocale);
    notFound();
  }

  return (
    <html lang={currentLocale} suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <AOSInit /> {/* Place this component at the top level */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <NextIntlClientProvider locale={currentLocale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
