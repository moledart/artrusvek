// These styles apply to every route in the application
import "./globals.css";

export const metadata = {
  title: "Продюсерская компания ArtRusVek",
  description: `Добро пожаловать в продюсерский центр ArtRusVek. Спектакли "Идеальный свидетель", "Главная Роль", "Зигзаг Удачи", "Левша", "Колесо Фортуны"`,
  openGraph: {
    title: "Продюсерская компания ArtRusVek",
    description:
      'Добро пожаловать в продюсерский центр ArtRusVek. Спектакли "Идеальный свидетель", "Главная Роль", "Зигзаг Удачи", "Левша", "Колесо Фортуны".',
    url: "https://www.artrusvek.ru/",
    siteName: "ArtRusVek",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/artrusvek.appspot.com/o/image%2Fplays%2Fglavnaya-rol%2Fthumbnail.jpg?alt=media&token=d3ab5c87-8ea1-4160-b96a-fb03a1e71b4d",
        width: 800,
        height: 600,
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/artrusvek.appspot.com/o/image%2Fplays%2Fglavnaya-rol%2Fthumbnail.jpg?alt=media&token=d3ab5c87-8ea1-4160-b96a-fb03a1e71b4d",
        width: 1800,
        height: 1600,
      },
    ],
    type: "website",
  },
};

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex flex-col max-w-7xl mx-auto flex-1 w-full px-5 overflow-visible lg:py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
