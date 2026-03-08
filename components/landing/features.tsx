import { Zap, Shield, BarChart3, Globe, Layers, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: 'Razendsnelle performance',
    description: 'Geoptimaliseerd voor snelheid. Elke actie voelt direct, ongeacht de schaal.',
  },
  {
    icon: Shield,
    title: 'Beveiliging ingebouwd',
    description: 'End-to-end encryptie en compliance-ready. Je data is veilig, altijd.',
  },
  {
    icon: BarChart3,
    title: 'Slimme analytics',
    description: 'Begrijp je gebruikers met real-time inzichten en actionable data.',
  },
  {
    icon: Globe,
    title: 'Wereldwijd schaalbaar',
    description: 'Van 10 tot 10 miljoen gebruikers. De infrastructuur groeit automatisch mee.',
  },
  {
    icon: Layers,
    title: 'Naadloze integraties',
    description: 'Verbind met je bestaande tools via onze API en kant-en-klare connectors.',
  },
  {
    icon: Clock,
    title: 'Tijdbesparend',
    description: 'Automatiseer repetitieve taken en focus je team op wat waarde creëert.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-zinc-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Alles wat je nodig hebt
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Krachtige features die je helpen sneller te groeien
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="mb-2 h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
