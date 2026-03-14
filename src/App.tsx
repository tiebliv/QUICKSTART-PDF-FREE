import { ReactNode } from "react";
import { motion } from "motion/react";
import { Phone, Mail, CheckCircle2, Zap, ShieldCheck, Users } from "lucide-react";

const Page = ({ children, title, pageNumber }: { children: ReactNode; title: string; pageNumber: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="min-h-screen flex flex-col p-8 md:p-16 bg-white border-b border-stone-200 relative"
  >
    <div className="max-w-3xl mx-auto w-full flex-grow">
      <header className="mb-12">
        <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-4 flex justify-between">
          <span>Meerakapp™ Solutions</span>
          <span>Page {pageNumber}</span>
        </div>
        <h2 className="text-3xl font-serif italic text-stone-900">{title}</h2>
        <div className="h-px w-12 bg-stone-900 mt-4" />
      </header>
      <div className="prose prose-stone lg:prose-lg">
        {children}
      </div>
    </div>
  </motion.section>
);

export default function App() {
  return (
    <div className="bg-stone-50 font-sans text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* PAGE 1 - COVER */}
      <section className="min-h-screen flex flex-col justify-center items-center p-8 text-center relative overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/30SEC RESP COVER.png" 
            alt="Meerakapp 30-Second Responder System"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/60 to-stone-950/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl relative z-10"
        >
          <p className="text-xs uppercase tracking-[0.4em] mb-8 text-stone-400">Meerakapp™ Solutions</p>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6 leading-tight">
            Meerakapp™ <br /> Quick Start Guide
          </h1>
          <p className="text-xl md:text-2xl font-light text-stone-300 mb-12 max-w-lg mx-auto leading-relaxed">
            How the 30-Second Responder System Helps You Capture Missed Leads Faster and Respond More Professionally
          </p>
          <div className="h-px w-24 bg-stone-700 mx-auto mb-12" />
          <p className="text-[10px] uppercase tracking-widest text-stone-500">
            Included with the Meerakapp™ 30-Second Responder System
          </p>
        </motion.div>
      </section>

      {/* PAGE 2 */}
      <Page title="What the 30-Second Responder System Is Designed to Do" pageNumber={2}>
        <p className="text-lg leading-relaxed text-stone-700 mb-6">
          In the home services industry, a missed call is often a lost job. When a homeowner has a leaking pipe or a broken AC unit, they rarely leave a voicemail and wait; they simply move to the next name on the list.
        </p>
        <p className="text-lg leading-relaxed text-stone-700 mb-8">
          Speed is the single most important factor in capturing new leads. The Meerakapp™ 30-Second Responder System is designed to bridge the gap between a missed call and a live conversation.
        </p>
        <div className="grid gap-6 mt-12">
          {[
            { icon: Zap, title: "Stop the 'Lead Leak'", text: "By providing an immediate response, you keep the customer from calling your competitors." },
            { icon: ShieldCheck, title: "Maintain Professionalism", text: "Every response is polished and helpful, ensuring your business makes a great first impression." },
            { icon: Users, title: "Reduce Stress", text: "You no longer have to worry about missing every single call during a busy shift or after hours." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="p-2 bg-stone-100 rounded-lg">
                <item.icon className="w-5 h-5 text-stone-900" />
              </div>
              <div>
                <h4 className="font-medium text-stone-900">{item.title}</h4>
                <p className="text-stone-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-stone-600 italic">
          The goal is not to replace your staff or your personal touch, but to eliminate the delay that causes potential customers to look elsewhere.
        </p>
      </Page>

      {/* PAGE 3 */}
      <Page title="How It Works" pageNumber={3}>
        <div className="space-y-12 mt-8">
          {[
            { step: "01", title: "A Call is Missed", desc: "Whether you are on another line, in a crawlspace, or it’s after business hours, the system detects when a call goes unanswered." },
            { step: "02", title: "A Response is Triggered", desc: "Within seconds of the missed call, the system initiates a professional response protocol." },
            { step: "03", title: "The Customer Receives a Text", desc: "The caller receives a friendly, professional text message acknowledging their call and letting them know you’ll be in touch." },
            { step: "04", title: "The Business is Alerted", desc: "At the same time, your team receives an immediate notification that a lead has been captured." },
            { step: "05", title: "Fast Follow-Up", desc: "Because the customer has been engaged, they are much more likely to wait for your call." }
          ].map((item, i) => (
            <div key={i} className="flex gap-8">
              <span className="text-4xl font-serif italic text-stone-200 shrink-0">{item.step}</span>
              <div>
                <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                <p className="text-stone-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Page>

      {/* PAGE 4 */}
      <Page title="What’s Included With Your Setup" pageNumber={4}>
        <ul className="space-y-4 mt-8">
          {[
            "Dedicated SMS Response Number",
            "Automatic Text Response to Missed Calls",
            "Lead Notification to Technician or Dispatcher",
            "System Setup and Configuration",
            "Digital System Guide (PDF)",
            "Onboarding Support"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-stone-700">
              <CheckCircle2 className="w-5 h-5 text-stone-900 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-16 p-6 bg-stone-50 border border-stone-200 rounded-2xl">
          <p className="text-sm text-stone-500 italic">
            Please Note: This is a digital automation service. All components are delivered and managed digitally; no physical hardware or goods are shipped as part of this system.
          </p>
        </div>
      </Page>

      {/* PAGE 5 */}
      <Page title="How to Get the Best Results" pageNumber={5}>
        <div className="grid gap-8 mt-8">
          <div className="p-8 bg-stone-900 text-white rounded-3xl">
            <p className="text-2xl font-serif italic leading-relaxed">
              "Speed gets attention. Professional follow-up earns trust."
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Respond Personally", text: "The automated text buys you time, but a personal call closes the deal." },
              { title: "Follow Up Quickly", text: "A callback within 5-10 minutes is significantly more effective than an hour later." },
              { title: "Keep Tone Professional", text: "Reference the text they received to show your business is organized." },
              { title: "Use Consistently", text: "Keep the system active after hours and on weekends for the best leads." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-stone-100 rounded-2xl">
                <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">{item.title}</h4>
                <p className="text-sm text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* PAGE 6 */}
      <Page title="Your Next Step" pageNumber={6}>
        <p className="text-lg text-stone-700 mb-12">
          Your system is now active and ready to work for you. The most important thing you can do now is stay consistent. Monitor your notifications, follow up with your leads, and watch how much more efficiently your business captures new opportunities.
        </p>
        
        <div className="mt-12 pt-12 border-t border-stone-100">
          <h4 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-8">Support</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-stone-400" />
              <span className="text-stone-900">support@meerakapp.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-stone-400" />
              <span className="text-stone-900">+1 (773) 234-6495</span>
            </div>
          </div>
        </div>

        <footer className="mt-24 text-[10px] uppercase tracking-widest text-stone-400">
          Meerakapp™ Solutions provides digital automation services for HVAC and home service businesses. No physical goods are shipped.
        </footer>
      </Page>
    </div>
  );
}
