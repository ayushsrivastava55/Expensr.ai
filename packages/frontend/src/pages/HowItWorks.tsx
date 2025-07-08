import { Upload, Brain, BarChart3, Wallet, Bell, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Upload Receipt",
      description:
        "Take a photo or upload an image/video of your receipt. Our system accepts multiple formats and handles various receipt types.",
      details: ["Photo capture", "Video upload", "Multiple formats", "Batch processing"],
    },
    {
      number: 2,
      icon: Brain,
      title: "AI Analyzes Data",
      description:
        "Our advanced AI processes the receipt, extracting all relevant information including items, prices, dates, and merchant details.",
      details: ["Text extraction", "Data validation", "Category detection", "Currency recognition"],
    },
    {
      number: 3,
      icon: BarChart3,
      title: "Get Insights",
      description:
        "Receive detailed analytics about your spending patterns, budget tracking, and personalized recommendations for better financial management.",
      details: ["Spending analysis", "Budget tracking", "Trend identification", "Cost optimization"],
    },
    {
      number: 4,
      icon: Wallet,
      title: "Add to Google Wallet",
      description:
        "Automatically generate and add digital receipt passes to your Google Wallet for easy access and organization.",
      details: ["Digital passes", "Offline access", "Easy organization", "Quick retrieval"],
    },
    {
      number: 5,
      icon: Bell,
      title: "Get Notified",
      description:
        "Receive smart notifications about warranty expirations, return deadlines, spending alerts, and budget updates.",
      details: ["Warranty alerts", "Return reminders", "Budget notifications", "Spending insights"],
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How ReceiptAI
            <span className="text-blue-600"> Works</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your receipt management in just 5 simple steps. Our AI-powered platform makes expense tracking
            effortless and intelligent.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div key={index} className="relative">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={isEven ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.number}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? "lg:col-start-1" : ""} flex justify-center`}>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 w-full max-w-md">
                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <Icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                        <div className="space-y-3">
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-blue-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-12">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already streamlined their expense management. Start your journey with
              ReceiptAI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 