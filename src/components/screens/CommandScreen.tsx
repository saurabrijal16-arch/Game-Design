import React from 'react';
import { Play, Shield, ShoppingBag, Zap, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function CommandScreen() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Character Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#0e0e13] via-[#131319] to-[#1f1f26]">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqPCKUuzzD8uMU951QxMD3rm8WuJIOTorrPyP8ld2YkwWG7malbOm61a_5kJjNOh2GwyysVGdYju0lZiAN3v4u7jX_0nlt_KMpyTuwh_mExxSkfHSD88mBHDx3x356Ytlt6fFH2BUBape4drANxW4iCu968UhmoWMM41wYWI-KVelDMtZqKx9Xx2ovNQli2UzcdoYRQN_juzn6yMpjPIHHUiMHFoYeQVXmdkkNCPuABqYtCdh489k4GpZj9a5_RCG9CBUvXqxSLt3r" 
          alt="Character Preview"
          className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-[10s] hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/40" />
      </div>

      {/* Left HUD: Character Stats */}
      <section className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-10">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass-panel p-6 rounded-xl w-64 kinetic-glow"
        >
          <h2 className="font-headline text-primary text-xl font-bold tracking-tight mb-4 uppercase">PILOT_ID: AX-7</h2>
          <div className="space-y-4">
            <div className="group">
              <div className="flex justify-between text-[10px] font-label text-on-surface-variant mb-1 uppercase tracking-tighter">SYNCHRONIZATION</div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] shadow-[0_0_10px_#8ff5ff]" />
              </div>
            </div>
            <div className="group">
              <div className="flex justify-between text-[10px] font-label text-on-surface-variant mb-1 uppercase tracking-tighter">KINETIC_FLOW</div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[62%] shadow-[0_0_10px_#ff51fa]" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <button className="glass-panel group px-6 py-4 rounded-xl flex items-center gap-4 hover:bg-primary/10 transition-all border-l-4 border-l-primary">
            <Zap className="text-primary group-hover:scale-110 transition-transform" size={20} />
            <div className="text-left">
              <div className="font-headline text-xs font-bold text-on-surface uppercase">UPGRADES</div>
              <div className="text-[10px] text-on-surface-variant font-body leading-none">TECH_TREE_AVAILABLE</div>
            </div>
          </button>
          <button className="glass-panel group px-6 py-4 rounded-xl flex items-center gap-4 hover:bg-secondary/10 transition-all border-l-4 border-l-secondary">
            <ShoppingBag className="text-secondary group-hover:scale-110 transition-transform" size={20} />
            <div className="text-left">
              <div className="font-headline text-xs font-bold text-on-surface uppercase">THE_VAULT</div>
              <div className="text-[10px] text-on-surface-variant font-body leading-none">NEW_ITEMS_IN_STOCK</div>
            </div>
          </button>
        </div>
      </section>

      {/* Central Action Hub */}
      <section className="relative z-20 flex flex-col items-center gap-8 px-6 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-2 mb-4"
        >
          <h1 className="font-headline text-6xl md:text-8xl font-black text-on-surface tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">
            NEON<br/><span className="text-primary text-glow">ETHER</span>
          </h1>
          <p className="font-label text-xs tracking-[0.5em] text-tertiary uppercase opacity-80">PROTOCOL: VENTURE_DEEP</p>
        </motion.div>

        {/* Play Button */}
        <button className="relative group p-1 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-[0_0_50px_rgba(143,245,255,0.4)] hover:shadow-[0_0_70px_rgba(143,245,255,0.6)] active:scale-95 transition-all duration-300">
          <div className="bg-background rounded-full px-12 py-5 flex items-center gap-4 group-hover:bg-transparent transition-colors">
            <span className="font-headline text-2xl font-black text-on-surface tracking-widest group-hover:text-background transition-colors uppercase">INITIATE</span>
            <Play className="text-primary group-hover:text-background transition-colors fill-current" size={32} />
          </div>
        </button>

        {/* Quick Navigation (Mobile Only) */}
        <div className="md:hidden grid grid-cols-2 gap-4 w-full mt-8">
          <button className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2">
            <Shield className="text-primary" size={20} />
            <span className="font-label text-[10px] tracking-widest">HEROES</span>
          </button>
          <button className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2">
            <ShoppingBag className="text-secondary" size={20} />
            <span className="font-label text-[10px] tracking-widest">STORE</span>
          </button>
        </div>
      </section>

      {/* Right HUD: Tactical News */}
      <section className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden xl:grid grid-cols-1 gap-4 w-72">
        <div className="glass-panel rounded-2xl overflow-hidden group">
          <div className="h-32 w-full relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpFe94LelGtnLs1kkAiCNduKwBT1KTjOxnGeaYGxGkFYTXNxDOcpljkXLz9kB46UsAAHJvlYzLZyEVHBCJyeJg-qHNvZR3k6R-u-KbnGsLBAI2jyXWIN9m1xJw3YFgcLH9c-JcgN6-gUv9WWZw6jgejkoWsL2wnnW4vbbSkDkbBIrEeQbzDxCzEJx-m9shCn8khaG2okFIsPpJ2JObhMk-IPHZzeVg2973hmdJ1pkbdJACl09JFtKdqKV6zounQJRycPRncE2CI4Yd" 
              alt="News"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent" />
            <span className="absolute top-3 right-3 bg-secondary text-on-secondary px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">EVENT</span>
          </div>
          <div className="p-4">
            <h3 className="font-headline text-sm font-bold text-on-surface uppercase mb-1">DATA_STREAM_04: BREACH</h3>
            <p className="font-body text-[10px] text-on-surface-variant leading-relaxed">Join the global challenge to secure the sector before collapse.</p>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-2xl border-l-4 border-l-tertiary">
          <div className="flex items-center justify-between mb-3">
            <span className="font-headline text-[10px] font-bold text-tertiary tracking-widest uppercase">FRIENDS_ONLINE</span>
            <span className="text-[10px] font-label text-on-surface-variant">12/48</span>
          </div>
          <div className="flex -space-x-3 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/avatar${i}/32/32`} 
                alt="Friend"
                className="inline-block h-8 w-8 rounded-full ring-2 ring-surface-container-high"
                referrerPolicy="no-referrer"
              />
            ))}
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-surface-bright ring-2 ring-surface-container-high text-[10px] font-label text-primary">+9</div>
          </div>
        </div>
      </section>
    </div>
  );
}
