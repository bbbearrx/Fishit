import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}