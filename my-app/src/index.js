import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from "./pages/Home";
import Firebase from "./Firebase.js";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Home />);

{/*root.render(<Firebase/>); too view/add to firebase database */}