'use client'

import { ThemeProvider } from 'next-themes'

export default function ThemeProv({children}) {
    return <ThemeProvider>{children}</ThemeProvider>
}