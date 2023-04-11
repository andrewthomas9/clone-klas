import "./globals.css";
import Header from "./components/Header";

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
    "E-learning",
    "Edtech",
    "Live",
    "Technology",
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
  category: ["technology", "edtech"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-blue-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
