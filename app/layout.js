import "./globals.css";

export const metadata = {
  title: {
    default: "Free Online Teaching Platform | Klas",
    template: "%s | Klas",
  },
  keywords: [
    "Klas",
    "Class",
    "Learning",
    "Platform",
    "Teaching",
    "tool",
    "Class",
    "E-learning",
    "Edtech",
    "Live",
    "Learning",
    "Technology",
    "Class",
    "Klas",
    "Class",
  ],
  description: "Free Online Teaching Tool: Live Classes, Community | Klas",
  applicationName: "Klas",
  authors: [{ name: "Klas" }],
  openGraph: {
    title: "klas",
    description: "Free Online Teaching Tool: Live Classes, Community | Klas",
    url: "https://tryklas.com",
    siteName: "",
    images: [
      {
        url: "/images/klas-meta.jpg",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Klas",
    description: "Free Online Teaching Tool: Live Classes, Community | Klas",
    creator: "@klas_hq",
    images: ["/images/klas-meta.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
