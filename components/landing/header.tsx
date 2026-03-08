import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { buttonVariants } from '@/lib/button-variants'
import { HeaderDropdown } from '@/components/landing/header-dropdown'

export async function Header() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          Pope
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            Features
          </a>
          <a href="#pricing" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <HeaderDropdown email={user.email ?? ''} />
          ) : (
            <Link href="/login" className={buttonVariants({ variant: 'default', size: 'sm' })}>
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
