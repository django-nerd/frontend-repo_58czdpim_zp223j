import { ShieldCheck, Brain, BookOpenCheck, BarChart3, Megaphone, CalendarDays, MessageSquare, Briefcase } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Academic Assistant", desc: "Summarize notes, generate quizzes, solve doubts, and explain tough topics with voice mode." },
  { icon: BookOpenCheck, title: "Resource Hub", desc: "Smart repository by semester → subject → unit with notes, PYQs, and textbooks." },
  { icon: BarChart3, title: "Results & Analytics", desc: "Auto-fetch VTU results with CGPA trends and performance insights." },
  { icon: Megaphone, title: "Announcements", desc: "Real-time circulars, exam updates, and events with optional auto-scraping." },
  { icon: CalendarDays, title: "Timetables & Reminders", desc: "Department-wise schedules, calendar sync, and smart alerts." },
  { icon: MessageSquare, title: "Community Forum", desc: "Ask questions, upvote answers, share resources, and join study groups." },
  { icon: Briefcase, title: "Placement Prep", desc: "Curated DSA, aptitude, resume builder, and mock interviews with AI." },
  { icon: ShieldCheck, title: "Admin & Mentors", desc: "Verified mentors, session booking, and secure role-based access." },
];

function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything VTU students need, in one place</h2>
          <p className="mt-3 text-gray-600">Built for speed, clarity, and collaboration. From first year to placements, we’ve got you.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow p-5">
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-tr from-purple-600 via-blue-600 to-indigo-600 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
