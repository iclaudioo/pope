export const dynamic = 'force-dynamic'

import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Pricing } from '@/components/landing/pricing'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}
