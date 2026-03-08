import Link from 'next/link'

const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Docs'],
  Bedrijf: ['Over ons', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Voorwaarden', 'Cookie policy'],
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Pope
            </Link>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              De toekomst van je platform begint hier.
            </p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Pope. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
