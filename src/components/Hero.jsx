import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 ring-1 ring-purple-200">AI-Powered Academic Platform</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            LearnWave
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Empowering VTU Students Through AI-Driven Learning & Collaboration.
            Centralize resources, get instant help, and grow with a vibrant community.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="inline-flex items-center px-5 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800">
              Explore Features
            </a>
            <a href="#demo" className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:border-gray-400">
              Watch Demo
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            VTU-first experience • Web & Mobile • Secure & private
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-amber-400/20 rounded-3xl blur-2xl pointer-events-none" />
          <div className="relative bg-white/70 backdrop-blur rounded-2xl border border-black/5 shadow-xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-50">
                <p className="text-sm font-medium text-purple-700">AI Assistant</p>
                <p className="text-xs text-purple-700/80">Summaries, quizzes, doubts</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50">
                <p className="text-sm font-medium text-blue-700">Resource Hub</p>
                <p className="text-xs text-blue-700/80">Notes, PYQs, filters</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50">
                <p className="text-sm font-medium text-amber-700">Results</p>
                <p className="text-xs text-amber-700/80">CGPA, trends</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50">
                <p className="text-sm font-medium text-emerald-700">Community</p>
                <p className="text-xs text-emerald-700/80">Q&A, study groups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
