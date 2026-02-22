import { Outlet, useLocation, useRouteError } from 'react-router';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export function RootErrorBoundary() {
  const error = useRouteError();
  console.error('❌ ROOT ERROR BOUNDARY CAUGHT:', error);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-red-950/30 border border-red-500/50 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-red-400 mb-4">⚠️ Component Error</h1>
        <pre className="text-white bg-slate-900 p-4 rounded overflow-auto max-h-96">
          {error instanceof Error ? error.message : JSON.stringify(error, null, 2)}
        </pre>
        {error instanceof Error && error.stack && (
          <pre className="text-gray-400 bg-slate-900 p-4 rounded overflow-auto max-h-96 mt-4 text-xs">
            {error.stack}
          </pre>
        )}
      </div>
    </div>
  );
}

export default function Root() {
  const location = useLocation();
  
  // DEBUG: Log current route with more details
  useEffect(() => {
    console.log('🔍 Current route:', location.pathname);
    console.log('🔍 Full location:', location);
  }, [location]);
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}