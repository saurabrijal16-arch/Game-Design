import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Lock, Star, Zap, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function PassScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="pt-12 pb-32 px-4 max-w-5xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
      >
        <ChevronLeft size={20} />
        <span className="font-headline text-xs font-bold uppercase tracking-widest">Back to Vault</span>
      </button>

      {/* Hero Section: Season Info */}
      <section className="mb-10 text-center">
        <h2 className="font-headline font-light text-tertiary tracking-[0.4em] text-xs uppercase mb-2">Current Operation</h2>
        <h1 className="font-headline font-bold text-4xl md:text-6xl text-on-surface tracking-tighter mb-4 italic uppercase">
          NEON <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ETHER</span> PASS
        </h1>
        <div className="inline-flex items-center gap-4 bg-surface-container px-6 py-2 rounded-full border border-outline-variant/10">
          <span className="text-secondary font-headline font-bold tracking-widest text-sm uppercase">Season 04</span>
          <div className="w-px h-4 bg-outline-variant/30" />
          <span className="text-on-surface-variant text-xs">Ends in: 14d 06h</span>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="mb-12 glass-panel p-6 rounded-3xl border border-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full -mr-20 -mt-20" />
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="block font-headline text-sm text-on-surface-variant uppercase tracking-widest mb-1">Pass Level</span>
            <span className="text-5xl font-headline font-black text-primary italic">24</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-on-surface-variant font-headline uppercase tracking-widest">XP to Level 25</span>
            <p className="text-lg font-headline font-bold">1,250 / 5,000</p>
          </div>
        </div>
        <div className="h-3 w-full bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant/10 p-[2px]">
          <div className="h-full bg-gradient-to-r from-primary-container to-primary rounded-full shadow-[0_0_10px_rgba(143,245,255,0.5)]" style={{ width: '25%' }} />
        </div>
      </section>

      {/* Premium Upgrade Banner */}
      <section className="mb-12 relative group cursor-pointer">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000" />
        <div className="relative bg-surface-container-low rounded-[2rem] overflow-hidden p-8 flex flex-col md:flex-row items-center gap-8 border border-white/5">
          <div className="flex-1">
            <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-lg font-headline text-[10px] font-bold tracking-widest uppercase mb-4">500% Value Value</div>
            <h3 className="text-3xl font-headline font-bold mb-4 tracking-tight uppercase italic">Upgrade to Elite</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                <ShieldCheck className="text-secondary" size={18} />
                Unlock 50+ Premium Rewards
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                <Zap className="text-secondary" size={18} />
                Instant Access to 'Glitch-Runner' Skin
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                <Star className="text-secondary" size={18} />
                25% Season XP Bonus
              </li>
            </ul>
            <button className="bg-gradient-to-br from-secondary to-secondary-container text-on-surface font-headline font-bold py-4 px-10 rounded-full shadow-[0_10px_30px_rgba(255,81,250,0.3)] active:scale-95 transition-all uppercase tracking-widest">
              Unlock Now — 1000 CR
            </button>
          </div>
          <div className="w-full md:w-64 h-64 relative rounded-2xl overflow-hidden bg-surface-container-highest/50 border border-outline-variant/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlOfccXP4jsCRTCYEmz4SA7RyHBErI4aAv4hWmFnd_Y8zzYKx-2I0D--4GRhx1M_nxt-hzWOFWahv9qAnUrOjLA1aEuecEZKFhg1FKnDRaTPuzLF9HnblGrmPAshHMVix1Ca_kBYfTqOP49f2lW1W8Bs64VOtrtkphHwOJWApN_tDQ88pGs8o_AmueqfKhqrkzvb9oY3n6NmFSfIaYi55FAodxjnXOmZEaYbtRKJF4QXXEGuAwbNF5uefnQEJ9oDF1RNIE8rNOUMX0" 
              alt="Elite Reward"
              className="w-full h-full object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-headline text-secondary uppercase tracking-widest font-bold">Premium Reveal</span>
              <p className="text-sm font-bold">Apex Sentinel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reward Stream */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8 px-2">
          <h4 className="font-headline font-bold text-xl tracking-tight uppercase italic">Reward Stream</h4>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-8 snap-x">
          {/* Level 24 (Claimed) */}
          <div className="min-w-[160px] snap-center flex flex-col gap-3 opacity-50">
            <RewardCard type="FREE" claimed />
            <LevelIndicator level={24} />
            <RewardCard type="ELITE" claimed />
          </div>

          {/* Level 25 (Active/Next) */}
          <div className="min-w-[180px] snap-center flex flex-col gap-3">
            <RewardCard type="FREE" active title="500 Credits" icon={<Star size={24} className="text-primary" />} />
            <LevelIndicator level={25} active />
            <RewardCard type="ELITE" locked title="Laser Katana" icon={<Zap size={24} className="text-secondary" />} />
          </div>

          {/* Level 26 */}
          <div className="min-w-[160px] snap-center flex flex-col gap-3">
            <RewardCard type="FREE" locked />
            <LevelIndicator level={26} />
            <RewardCard type="ELITE" locked />
          </div>

          {/* Level 50 (Ultimate) */}
          <div className="min-w-[240px] snap-center flex flex-col gap-3 ml-8">
            <div className="h-24 glass-panel rounded-2xl flex items-center justify-center border border-outline-variant/10 relative opacity-40">
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Empty Slot</span>
            </div>
            <div className="flex items-center justify-center py-2 relative">
              <div className="absolute w-full h-px bg-gradient-to-r from-outline-variant/20 to-secondary/40 top-1/2" />
              <div className="relative w-12 h-12 rounded-full bg-surface-container-lowest border-2 border-secondary flex items-center justify-center font-headline font-bold text-secondary z-10 animate-pulse italic">50</div>
            </div>
            <div className="h-40 glass-panel rounded-2xl overflow-hidden border border-secondary/50 relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlQnSSXdGOtr6ZAUI3FlEvHNduXr0OtEqsvsrFiFBDOWLTrA0fvbd16HF4PxgxFa20jW-8l4VPnFbMdJTHlc-v_YSRKjS4fHsMVEFW8j1OPICKR-FARmyZlFqEDpiWcELUe47Yd9elE1arTfkfZj2dGv8nFnaU0UMGoBFz2Fhx9V2NPmPGk7Ny3Qf838FA60nhbvehKbiL35b3a8on5UOMu7j9IBcScSWp7AWquUcp2tNJlTNXAvsO3xo9PRi2dKE6qp-BiyQCXcxk" 
                alt="Ultimate Reward"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-container/80 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[9px] font-headline text-white uppercase tracking-tighter bg-secondary px-2 py-0.5 rounded">LEGENDARY</span>
                <p className="text-sm font-black font-headline text-white leading-none mt-1 uppercase italic">Ether-God Skin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Stats */}
      <section className="grid grid-cols-2 gap-4">
        <div className="glass-panel p-4 rounded-2xl border border-outline-variant/10">
          <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center mb-4">
            <Zap className="text-tertiary" size={20} />
          </div>
          <h5 className="font-headline font-bold text-sm mb-1 uppercase tracking-tight">Boost Active</h5>
          <p className="text-[10px] text-on-surface-variant">Leveling up 15% faster thanks to Season 04 perks.</p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border border-outline-variant/10">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Users className="text-primary" size={20} />
          </div>
          <h5 className="font-headline font-bold text-sm mb-1 uppercase tracking-tight">Clan Progress</h5>
          <p className="text-[10px] text-on-surface-variant">32,000 XP until Clan Tier 12 reward drop.</p>
        </div>
      </section>
    </div>
  );
}

function RewardCard({ type, claimed, locked, active, title, icon }: { type: 'FREE' | 'ELITE', claimed?: boolean, locked?: boolean, active?: boolean, title?: string, icon?: React.ReactNode }) {
  return (
    <div className={`h-28 glass-panel rounded-2xl flex flex-col items-center justify-center border relative transition-all ${
      active ? 'border-primary/40 shadow-[0_0_20px_rgba(143,245,255,0.1)]' : 'border-outline-variant/10'
    }`}>
      {claimed && <CheckCircle2 size={24} className="text-on-surface-variant" />}
      {locked && <Lock size={24} className="text-on-surface-variant opacity-40" />}
      {icon && icon}
      {title && <span className="text-xs font-bold mt-2">{title}</span>}
      
      <div className={`absolute ${type === 'FREE' ? '-top-3' : '-bottom-3'} left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-headline font-bold uppercase border ${
        type === 'FREE' ? 'bg-surface-container text-on-surface-variant border-outline-variant/20' : 'bg-secondary/10 text-secondary border-secondary/20'
      }`}>
        {type}
      </div>
    </div>
  );
}

function LevelIndicator({ level, active }: { level: number, active?: boolean }) {
  return (
    <div className="flex items-center justify-center py-2 relative">
      <div className={`absolute w-full h-px top-1/2 ${active ? 'bg-primary/40' : 'bg-outline-variant/20'}`} />
      <div className={`relative w-12 h-12 rounded-full border-4 border-background flex items-center justify-center font-headline font-black text-lg z-10 italic transition-all ${
        active ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(143,245,255,0.4)]' : 'bg-surface-container text-on-surface-variant border-outline-variant/20'
      }`}>
        {level}
      </div>
    </div>
  );
}
