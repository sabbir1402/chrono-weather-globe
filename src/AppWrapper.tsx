
import React from "react";
import App from "./App";
import { QueryProvider } from "./providers/QueryProvider";

const AppWrapper: React.FC = () => {
  return (
    <QueryProvider>
      <App />
    </QueryProvider>
  );
};

export default AppWrapper;
