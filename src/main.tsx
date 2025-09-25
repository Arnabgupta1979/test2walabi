import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML += '<div style="padding:12px;color:#b91c1c">Failed to find root element</div>';
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error(error);
    rootElement.innerHTML = '<div style="padding:12px;color:#b91c1c">App failed to load. Check console for details.</div>';
  }
}
