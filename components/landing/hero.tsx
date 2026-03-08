import Link from 'next/link'
import { buttonVariants } from '@/lib/button-variants'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2 md:py-32">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
          De toekomst van je platform begint hier
        </h1>
        <p className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
          Bouw sneller, schaal moeiteloos, en focus op wat ertoe doet. Pope geeft je de tools om je visie werkelijkheid te maken.
        </p>
        <div className="flex gap-4">
          <Link href="/signup" className={buttonVariants({ size: 'lg' })}>
            Start gratis
          </Link>
          <a href="#features" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
            Bekijk features
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="aspect-square w-full max-w-md rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700" />
      </div>
    </section>
  )
}
