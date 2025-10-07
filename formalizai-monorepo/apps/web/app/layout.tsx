import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formaliza AI - Automatize Documentos Jurídicos',
  description: 'Gere procurações e contratos de honorários em segundos com IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
