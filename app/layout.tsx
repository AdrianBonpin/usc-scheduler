import { consMeta } from '@/utils/extra'
import ThemeProv from '@/utils/themeprovider'

import './globals.css'

export const metadata = consMeta()

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <header>
      </header>
      <body>
        <ThemeProv>
          {children}
        </ThemeProv>
      </body>
    </html>
  )
}
