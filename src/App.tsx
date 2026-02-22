import { RouterProvider } from 'react-router';
import { useEffect } from 'react';
console.log('✅ App: RouterProvider imported');

import { router } from './routes';
console.log('✅ App: router imported from routes.tsx');

export default function App() {
  console.log('🚀 APP.TSX LOADED - BUILD TIMESTAMP:', new Date().toISOString());
  console.log('📦 Router exists:', !!router);
  
  // FIGMA PREVIEW: Handle ?preview-route parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const previewRoute = urlParams.get('preview-route');
    
    if (previewRoute) {
      console.log('🎨 FIGMA PREVIEW: Detected preview-route parameter:', previewRoute);
      console.log('🎨 FIGMA PREVIEW: Current pathname:', window.location.pathname);
      
      // Navigate to the preview route
      if (window.location.pathname !== previewRoute) {
        console.log('🎨 FIGMA PREVIEW: Navigating to:', previewRoute);
        router.navigate(previewRoute);
      }
    }
  }, []);
  
  return <RouterProvider router={router} />;
}