import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoadsideRescueTyres.co.uk",
  description:
    "Emergency Mobile Tyre Fitting & Vehicle Recovery Services Across the UK. Fast 24/7 Roadside Assistance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body
        className="antialiased"
        itemScope
        itemType="https://schema.org/WebPage"
      >

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VJ7CB3L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Skip link */}
        <a className="sr-only focus:not-sr-only" href="#content">
          Skip to content
        </a>

        <div className="site min-h-screen flex flex-col" id="page">

          {children}

        </div>

      </body>

    </html>
  );
}