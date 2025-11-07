function CTA() {
  return (
    <section id="demo" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-amber-400/20 rounded-3xl blur-2xl pointer-events-none" />
          <div className="relative rounded-2xl border border-black/5 bg-white shadow-xl p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Ready to ride the LearnWave?</h3>
            <p className="mt-3 text-gray-600">Join the waitlist to get early access, contribute resources, and help shape the VTU-first academic platform.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <input type="email" required placeholder="Enter your VTU email" className="w-full sm:w-80 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button type="submit" className="px-5 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800">Join Waitlist</button>
            </form>
            <p className="mt-3 text-xs text-gray-500">We’ll reach out soon. No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
