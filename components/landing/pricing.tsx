import Link from 'next/link'
import { Check } from 'lucide-react'
import { buttonVariants } from '@/lib/button-variants'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect om te starten',
    features: ['1.000 requests per maand', '1 project', 'Community support', 'Basis analytics'],
    highlighted: false,
    cta: 'Start gratis',
  },
  {
    name: 'Pro',
    price: '29',
    description: 'Voor groeiende teams',
    features: ['100.000 requests per maand', 'Onbeperkte projecten', 'Priority support', 'Geavanceerde analytics', 'Custom integraties', 'Team management'],
    highlighted: true,
    cta: 'Start met Pro',
  },
  {
    name: 'Enterprise',
    price: 'Op maat',
    description: 'Voor grote organisaties',
    features: ['Onbeperkte requests', 'Onbeperkte projecten', 'Dedicated support', 'Custom analytics', 'SLA garantie', 'On-premise optie'],
    highlighted: false,
    cta: 'Neem contact op',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Eenvoudige, transparante prijzen
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Kies het plan dat bij je past. Upgrade of downgrade wanneer je wilt.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                tier.highlighted && 'border-zinc-900 shadow-lg dark:border-zinc-50'
              )}
            >
              <CardHeader>
                {tier.highlighted && (
                  <span className="mb-2 inline-block w-fit rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white dark:bg-zinc-50 dark:text-zinc-900">
                    Aanbevolen
                  </span>
                )}
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4">
                  {tier.price === 'Op maat' ? (
                    <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{tier.price}</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">&euro;{tier.price}</span>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">/maand</span>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Check className="h-4 w-4 text-zinc-900 dark:text-zinc-50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="/signup"
                  className={buttonVariants({
                    variant: tier.highlighted ? 'default' : 'outline',
                    className: 'w-full',
                  })}
                >
                  {tier.cta}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
