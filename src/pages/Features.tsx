import { Camera, MessageSquare, BarChart3, Wallet, Globe, Brain, Smartphone, Bell } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Camera,
      title: "Multimodal Receipt Scanning",
      description:
        "Upload photos or videos of receipts. Our AI extracts all relevant information including items, prices, dates, and merchant details with high accuracy.",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "Local Language Queries",
      description:
        "Ask questions about your receipts in your native language. Get insights and answers in the language you're most comfortable with.",
      color: "green",
    },
    {
      icon: BarChart3,
      title: "Smart Expense Analysis",
      description:
        "Automatically categorize expenses, track spending patterns, and get personalized insights to optimize your budget and financial health.",
      color: "purple",
    },
    {
      icon: Wallet,
      title: "Google Wallet Pass Integration",
      description:
        "Seamlessly add digital receipts to your Google Wallet as passes. Access your receipts anytime, anywhere, even offline.",
      color: "orange",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Leverage advanced machine learning to understand your spending habits, predict future expenses, and suggest cost-saving opportunities.",
      color: "indigo",
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description:
        "Handle receipts from around the world with automatic currency detection and conversion to your preferred currency.",
      color: "teal",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Optimized for mobile devices with an intuitive interface that makes receipt management effortless on the go.",
      color: "pink",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Get timely reminders for warranty expirations, return deadlines, and spending alerts to stay on top of your finances.",
      color: "yellow",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600",
      teal: "bg-teal-100 text-teal-600",
      pink: "bg-pink-100 text-pink-600",
      yellow: "bg-yellow-100 text-yellow-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-blue-600"> Smart Receipt Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform transforms the way you handle receipts, analyze expenses, and manage
            your financial data.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-lg ${getColorClasses(feature.color)} flex items-center justify-center mb-6`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Receipt Management?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have already simplified their expense tracking with ReceiptAI.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  )
}
