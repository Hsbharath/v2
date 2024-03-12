'use client'; // This seems like a comment intended for a specific tool or framework, possibly related to Next.js

import { ThemeProvider } from 'next-themes'; // Importing ThemeProvider from the next-themes library

// Definition of Providers component, responsible for providing themes to its children components
export function Providers({ children }) {
  return (
    // Wrapping children components with ThemeProvider to enable theme switching
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children} {/* Rendering children components */}
    </ThemeProvider>
  );
}
