// Vercel Web Analytics
// This module initializes Vercel Web Analytics for the UI

export const analyticsJsContent = /* js */ `
// Vercel Web Analytics initialization
(function() {
  // Check if running in development mode
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const mode = isDev ? 'development' : 'production';
  
  // Initialize analytics queue
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
  
  // Inject analytics script
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  script.setAttribute('data-mode', mode);
  document.head.appendChild(script);
  
  console.log('[Analytics] Vercel Web Analytics initialized in ' + mode + ' mode');
})();
`;
