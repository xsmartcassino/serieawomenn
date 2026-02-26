import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, Twitter, Facebook, ArrowRight, Bell, Globe, Trophy, Users } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you'd send this to your backend
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-fuchsia-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      {/* Header */}
      <header className="p-6 md:p-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-purple-700 rounded-lg flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
            <Trophy className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">SERIE A <span className="text-fuchsia-500">WOMEN</span></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400"
        >
          <a href="#" className="hover:text-white transition-colors">News</a>
          <a href="#" className="hover:text-white transition-colors">Squadre</a>
          <a href="#" className="hover:text-white transition-colors">Classifica</a>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            Coming Soon
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-6">
            IL NUOVO VOLTO DEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500">
              CALCIO FEMMINILE
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Stiamo costruendo la casa definitiva per la Serie A Femminile. 
            Risultati, analisi, interviste esclusive e tutto il mondo del calcio in rosa in un unico portale.
          </p>

          {/* Form */}
          <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative flex flex-col md:flex-row gap-2 p-2 bg-zinc-900 border border-zinc-800 rounded-2xl">
                    <div className="flex-1 flex items-center px-4 gap-3">
                      <Mail className="w-5 h-5 text-zinc-500" />
                      <input
                        type="email"
                        required
                        placeholder="Inserisci la tua email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-zinc-600 py-3 outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-fuchsia-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      Avvisami
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-2xl text-fuchsia-400 font-medium flex items-center justify-center gap-3"
                >
                  <Bell className="w-5 h-5 animate-bounce" />
                  Ti avviseremo non appena saremo online!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full"
        >
          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-fuchsia-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6 text-fuchsia-500" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2 text-white">Copertura Totale</h3>
            <p className="text-zinc-500 text-sm">Ogni partita, ogni gol, ogni emozione della Serie A Femminile raccontata in tempo reale.</p>
          </div>
          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-purple-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2 text-white">Community</h3>
            <p className="text-zinc-500 text-sm">Uno spazio dedicato ai tifosi per discutere, condividere e supportare le proprie campionesse.</p>
          </div>
          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-blue-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2 text-white">Esclusive</h3>
            <p className="text-zinc-500 text-sm">Interviste inedite, dietro le quinte e approfondimenti tattici che non troverai altrove.</p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-900">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} serieawomen.it - Tutti i diritti riservati.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-zinc-500 hover:text-fuchsia-500 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-600">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <span className="w-1 h-1 rounded-full bg-zinc-800" />
          <a href="#" className="hover:text-white transition-colors">Contatti</a>
        </div>
      </footer>
    </div>
  );
}
