import { Code, Cpu, Zap, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code,
      title: 'Innovation Hub',
      description: 'Experience cutting-edge technology and groundbreaking ideas from brilliant minds.',
    },
    {
      icon: Cpu,
      title: 'Hands-On Workshops',
      description: 'Learn from industry experts through interactive sessions and practical training.',
    },
    {
      icon: Zap,
      title: 'Competitive Events',
      description: 'Challenge yourself in hackathons, coding competitions, and technical contests.',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with peers, mentors, and industry professionals to expand your horizons.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Beyond The Event Horizon
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            TechFest 2024 is where passion meets technology. A cosmic celebration of innovation,
            creativity, and technical excellence that transcends boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Why Attend TechFest 2024?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▸</span>
                  <span>Collaborate with 500+ tech enthusiasts from across the nation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▸</span>
                  <span>Win exciting prizes worth ₹5 Lakhs+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▸</span>
                  <span>Get mentored by industry leaders and tech pioneers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▸</span>
                  <span>Access to exclusive workshops and certification programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▸</span>
                  <span>Opportunities for internships and job placements</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                    Nov 15-20
                  </div>
                  <div className="text-2xl text-gray-300">2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
