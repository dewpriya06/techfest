import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="black-hole"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6 space-x-2">
          <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
          <Rocket className="w-10 h-10 text-purple-400 animate-bounce" />
          <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
          TECHFEST 2024
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Enter the Event Horizon of Innovation
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Where technology meets infinity. Join us for an extraordinary journey through workshops,
          hackathons, and groundbreaking competitions that will bend your perception of what's possible.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#events"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Explore Events
          </a>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-400">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-gray-400">Events</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">₹5L+</div>
            <div className="text-gray-400">Prize Pool</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
