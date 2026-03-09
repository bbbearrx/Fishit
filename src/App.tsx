import { RouterProvider } from 'react-router';
import { useEffect } from 'react';
import { router } from './routes.tsx';

export default function App() {
  // FIGMA PREVIEW: Handle ?preview-route parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const previewRoute = urlParams.get('preview-route');
    
    if (previewRoute && window.location.pathname !== previewRoute) {
      router.navigate(previewRoute);
    }
  }, []);
  
  return <RouterProvider router={router} />;
}