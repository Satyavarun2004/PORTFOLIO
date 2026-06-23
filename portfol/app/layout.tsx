import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Varun Perumalla | Software Developer Portfolio",
  description:
    "Portfolio of Varun Perumalla, aspiring software developer skilled in full-stack development and machine learning.",
  keywords: [
    "Varun Perumalla",
    "Software Developer",
    "Fresher Portfolio",
    "Full Stack Developer",
    "Web Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

