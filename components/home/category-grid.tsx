import Link from 'next/link'
import { ArrowRight, Circle, Target, Feather, Activity, Dumbbell, Shield, Zap, Medal } from 'lucide-react'
import { getCategories } from '@/lib/api'

// Simple icon mapper based on category name
function getCategoryIcon(name: string) {
  const lowerName = name.toLowerCase()
  if (lowerName.includes('cricket')) return <Target className="w-6 h-6" />
  if (lowerName.includes('badminton')) return <Feather className="w-6 h-6" />
  if (lowerName.includes('football')) return <Circle className="w-6 h-6" />
  if (lowerName.includes('fitness') || lowerName.includes('gym')) return <Dumbbell className="w-6 h-6" />
  if (lowerName.includes('protection')) return <Shield className="w-6 h-6" />
  if (lowerName.includes('apparel') || lowerName.includes('clothing')) return <Activity className="w-6 h-6" />
  if (lowerName.includes('shoes') || lowerName.includes('footwear')) return <Zap className="w-6 h-6" />
  return <Medal className="w-6 h-6" />
}

export async function CategoryGrid() {
  const categories = await getCategories()

  return (
    <section className="section-padding py-24 bg-background">
      <div className="container mx-auto">
        <div className="mb-12">
          <p className="text-muted-foreground text-sm font-bold tracking-widest uppercase mb-2">BROWSE BY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">CATEGORY</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.slice(0, 13).map((category, i) => (
            <Link 
              key={category.id} 
              href={`/products/${category.slug}`}
              className="group bg-card text-card-foreground border border-border rounded-xl shadow-sm-hover relative overflow-hidden rounded-2xl p-6 aspect-square md:aspect-[4/3] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-brand-accent/50"
            >
              {/* Subtle Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40"
                style={{ 
                  background: `linear-gradient(135deg, transparent, hsl(${(i * 45) % 360}, 70%, 50%))` 
                }}
              />
              
              <div className="relative z-10 text-foreground/70 group-hover:text-brand-accent transition-colors">
                {getCategoryIcon(category.name)}
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:translate-x-1 transition-transform">
                  {category.name}
                </h3>
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span>50+ Products</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

