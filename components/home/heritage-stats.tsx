export function HeritageStats() {
  return (
    <section className="section-padding py-24 relative overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <p className="text-brand-accent text-sm font-bold tracking-[0.2em] uppercase">OUR LEGACY</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-foreground">40 Years of</span>{' '}
            <span className="accent-gradient-text block mt-2">Sporting Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Since 1984, Anand Sports has been the cornerstone of the athletic community in Odisha and Eastern India. We pride ourselves on delivering authentic, premium sporting goods to retail partners and athletes alike.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { num: '40+', label: 'Years in Business' },
            { num: '15+', label: 'Brand Partners' },
            { num: '1000+', label: 'Retailers Served' },
            { num: '13', label: 'Sports Categories' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card text-card-foreground border border-border rounded-xl shadow-sm p-8 rounded-3xl text-center group hover:bg-white/[0.05] transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.num}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/30 text-sm tracking-wide">
            Proudly serving from Cuttack, Odisha
          </p>
        </div>
      </div>
    </section>
  )
}

