import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Root() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900" style={{ width: '100%', minWidth: '100vw' }}>
      <Header />
      <main className="w-full" style={{ width: '100%' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}