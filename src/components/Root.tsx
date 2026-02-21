import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './seo/Breadcrumbs';

export default function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900">
      <Header />
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}