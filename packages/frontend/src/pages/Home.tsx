import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react"
import { Link } from "react-router-dom"


export default function Home() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <span className="text-blue-600 font-semibold">AI-Powered</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your AI Receipt
                <span className="text-blue-600"> Assistant</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Digitize receipts, gain insights, and optimize spending — right from your Google Wallet. Transform your
                expense management with the power of AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Learn How
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Receipt Preview</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-3 bg-blue-200 rounded w-1/4"></div>
                    <div className="h-3 bg-green-200 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ReceiptAI?</h2>
            <p className="text-lg text-gray-600">Powerful features designed to simplify your expense management</p>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Process receipts in seconds with advanced AI technology</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data is encrypted and processed with bank-level security</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Insights</h3>
              <p className="text-gray-600">Get actionable insights about your spending patterns</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
