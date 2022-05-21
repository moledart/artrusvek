import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex flex-col max-w-7xl mx-auto flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
