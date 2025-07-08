import { Target, Users, Award, Lightbulb } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "AI Engineer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Specializes in computer vision and natural language processing",
    },
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Expert in React, Node.js, and cloud architecture",
    },
    {
      name: "Michael Rodriguez",
      role: "UX Designer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Passionate about creating intuitive user experiences",
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Drives product strategy and user-centered design",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We leverage cutting-edge AI technology to solve real-world problems and make expense management effortless.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description:
        "Every feature is designed with our users in mind, ensuring simplicity, accessibility, and maximum value.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest quality in everything we do, from code to user experience to customer support.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description:
        "We think outside the box to create unique solutions that transform how people manage their finances.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="text-blue-600"> ReceiptAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from a hackathon idea, ReceiptAI is revolutionizing how people manage their receipts and expenses
            through the power of artificial intelligence.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe that managing receipts and tracking expenses shouldn't be a tedious chore. Our mission is
                  to harness the power of AI to make financial management intuitive, intelligent, and accessible to
                  everyone.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Built for a hackathon, ReceiptAI represents our vision of the future where technology seamlessly
                  integrates with daily life to solve real problems and create meaningful value.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hackathon Project</h3>
                  <p className="text-gray-600">
                    Developed during a 48-hour hackathon to showcase the potential of AI in everyday applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our development and decision-making</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The talented individuals behind ReceiptAI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built With Modern Technology</h2>
            <p className="text-lg text-gray-600">Leveraging the latest tools and frameworks for optimal performance</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["React", "TypeScript", "Node.js", "Python", "TensorFlow", "Google Cloud"].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="h-12 bg-gray-200 rounded mb-2"></div>
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 