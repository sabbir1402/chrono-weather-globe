
import { createRoot } from 'react-dom/client';
import AppWrapper from './AppWrapper.tsx';
import './index.css';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
createRoot(rootElement).render(<AppWrapper />);
