import { MapPinIcon as MapPin, PhoneIcon as Phone, EnvelopeIcon as Mail, ClockIcon as Clock } from '@heroicons/react/24/solid';

export default function ContactPage() {
  return (
    <main className="bg-pearl-50 pt-32 pb-24 min-h-screen">
      <div className="container-wide px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold-500 font-heading tracking-[0.2em] uppercase text-sm mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-heading font-bold text-5xl text-forest-950 mb-6">
            Start Your Journey
          </h1>
          <p className="text-forest-500 text-lg font-light">
            Whether you have a question about our itineraries, need help customizing a tour, 
            or want to say hello, our dedicated travel curators are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-pearl-200 text-center">
            <div className="w-12 h-12 bg-pearl-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-500">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-forest-950 mb-2">Call Us</h3>
            <p className="text-forest-500 font-light">+94 77 123 4567</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-pearl-200 text-center">
            <div className="w-12 h-12 bg-pearl-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-500">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-forest-950 mb-2">Email Us</h3>
            <p className="text-forest-500 font-light">hello@ceylontrails.com</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-pearl-200 text-center">
            <div className="w-12 h-12 bg-pearl-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-500">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-forest-950 mb-2">Visit Us</h3>
            <p className="text-forest-500 font-light">123 Galle Road, Colombo 03</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-pearl-200">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-forest-950 block">First Name</label>
                <input type="text" className="w-full bg-pearl-50 border border-pearl-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-forest-950 block">Last Name</label>
                <input type="text" className="w-full bg-pearl-50 border border-pearl-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-forest-950 block">Email Address</label>
              <input type="email" className="w-full bg-pearl-50 border border-pearl-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-forest-950 block">Message</label>
              <textarea rows={5} className="w-full bg-pearl-50 border border-pearl-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all" placeholder="Tell us about your dream trip..."></textarea>
            </div>
            <button type="button" className="w-full bg-forest-950 text-white font-heading font-bold py-4 rounded-xl hover:bg-gold-500 hover:text-forest-950 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
