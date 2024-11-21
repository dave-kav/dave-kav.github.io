import { Navigation } from './Navigation';
import { Footer } from './Footer';
import './Layout.css';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
};
