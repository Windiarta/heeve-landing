import Link from 'next/link'

interface DBPlan {
  name: string
  targetUser: string
  pageCount: string
  design: string
  technology: string
  databaseCms: string
  paymentIntegration: string
  aiFeatures: string
  maintenanceSupport: string
  domain: string
  price: string
  recommended: boolean
  order: number
}

interface DBAddOn {
  category: string
  feature: string
  price: string
  order: number
}

interface PricingSectionProps {
  title: string
  subtitle: string
  tableLabels: {
    pageCount: string
    design: string
    technology: string
    databaseCms: string
    paymentIntegration: string
    aiFeatures: string
    maintenanceSupport: string
    domain: string
  }
  addOnsTitle: string
  addOnsSubtitle: string
  ctaChoose: string
  ctaContact: string
  plans: DBPlan[]
  addOns: DBAddOn[]
  locale: string
}

export default function PricingSection({
  title,
  subtitle,
  tableLabels,
  addOnsTitle,
  addOnsSubtitle,
  ctaChoose,
  ctaContact,
  plans,
  addOns,
  locale
}: PricingSectionProps) {
  // Group add-ons by category
  const addOnsByCategory = addOns.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = []
    }
    acc[curr.category].push(curr)
    return acc
  }, {} as Record<string, DBAddOn[]>)

  const categories = Object.keys(addOnsByCategory)

  return (
    <section id="pricing" className="py-20 border-b border-white/10 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-blue-400">
            {title}
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] ${
                plan.recommended
                  ? 'border-blue-500 bg-blue-950/20 shadow-lg shadow-blue-500/10'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-white shadow-md">
                  Recommended
                </span>
              )}
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-400 mb-4 min-h-[32px]">{plan.targetUser}</p>

                <div className="mb-4">
                  {/* Smaller price font: text-lg instead of text-3xl */}
                  <span className="text-lg font-bold text-blue-400">{plan.price}</span>
                </div>

                <hr className="border-white/10 my-4" />

                {/* Features List */}
                <ul className="space-y-3 text-xs text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <div>
                      <strong className="text-gray-500 block text-[10px] uppercase tracking-wider">{tableLabels.pageCount}</strong>
                      {plan.pageCount}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <div>
                      <strong className="text-gray-500 block text-[10px] uppercase tracking-wider">{tableLabels.design}</strong>
                      {plan.design}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <div>
                      <strong className="text-gray-500 block text-[10px] uppercase tracking-wider">{tableLabels.technology}</strong>
                      {plan.technology}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <div>
                      <strong className="text-gray-500 block text-[10px] uppercase tracking-wider">{tableLabels.databaseCms}</strong>
                      {plan.databaseCms}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <div>
                      <strong className="text-gray-500 block text-[10px] uppercase tracking-wider">{tableLabels.paymentIntegration}</strong>
                      {plan.paymentIntegration}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <div>
                      <strong className="text-gray-500 block text-[10px] uppercase tracking-wider">{tableLabels.aiFeatures}</strong>
                      {plan.aiFeatures}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <div>
                      <strong className="text-gray-500 block text-[10px] uppercase tracking-wider">{tableLabels.maintenanceSupport}</strong>
                      {plan.maintenanceSupport}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <div>
                      <strong className="text-gray-500 block text-[10px] uppercase tracking-wider">{tableLabels.domain}</strong>
                      {plan.domain}
                    </div>
                  </li>
                </ul>
              </div>

              <Link
                href={`/${locale}#contact`}
                className={`w-full py-2 px-3 rounded-lg text-center text-xs font-semibold transition-all duration-200 ${
                  plan.recommended
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.price.toLowerCase().includes('ask sales') ? ctaContact : ctaChoose}
              </Link>
            </div>
          ))}
        </div>

        {/* Add On Features Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {addOnsTitle}
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              {addOnsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div key={category} className="rounded-2xl border border-white/10 bg-white/[0.01] p-5 backdrop-blur">
                <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 border-b border-white/10 pb-1.5">
                  {category}
                </h4>
                <div className="divide-y divide-white/5 space-y-1">
                  {addOnsByCategory[category].map((item, idx) => (
                    <div key={idx} className="py-2 flex justify-between items-center gap-2 text-xs">
                      <span className="text-gray-300 font-medium">{item.feature}</span>
                      <span className="text-blue-400 font-semibold bg-blue-950/30 px-2 py-0.5 rounded border border-blue-500/20 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
