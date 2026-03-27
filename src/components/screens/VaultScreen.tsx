import React from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'motion/react';

const ITEMS = [
  {
    id: 'cyber-mantis',
    name: 'CYBER-MANTIS ARMOR',
    class: 'Heavy Assault Set',
    price: 1200,
    rarity: 'RARE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALfD9BcNB7Ee0gDHRbo6A78ZlO8TFE7TJldbpklrJh0ZYd0xRcrpB9ibRMJYl-TJdfWUCGhWlZh1RQ7E_JRo-cpR0ARw6TW5mgXXggsLEYxuleG0ad9mmHzGsXVim7hCBjAzcm3_oCBJQMAX46DVP0xmqXFmFGG5UIoZj0oaY5lE0foYaPm9qOQ0SwmhXKHCW3fznUv9uA5JqNstr4f3UwUcrk84hOll-g-Z7W3AW_kA2QWnPydH4gfWbtidUIw6XuB7QVR_v01-za',
    color: 'primary'
  },
  {
    id: 'solaris-prime',
    name: 'SOLARIS PRIME RIFLE',
    class: 'Exclusive Pattern',
    price: 2800,
    rarity: 'LEGENDARY',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBipLQerVCK_lOr7v5xs3E0r6zYYmimPDuiEQKIrQwGsY82DYGpzdrZeW0vVUsXqM6o_o9LpA5htjnu9gaXPl5MVaK26d_6Lca5YS5t9z8bTJmD_z06gJAPAH3IZg1Ewc0XqZqhDhbDee1riFe6DdJWk7WL-w-Dx6Az5xffNzsClLsx4K6y6dsILgl97wkcJhTDggGXZq4khQt_6R0bsaRXyFVCP_BPM8aYcrDskSkhI-ramntnoiwn3CWpnVTGdU5xP9iPQpTudNRm',
    color: 'secondary'
  },
  {
    id: 'holo-fox',
    name: 'HOLO-FOX BUDDY',
    class: 'Interactive Cosmetic',
    price: 850,
    rarity: 'EPIC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiLGczb6W7YyOx8oq74WmJN9qQfqPLjTCmJGAJPfc5ShY5G4JygSOTrCTVwlboxq3C3gx87jTMHscbq7B7mrUrpMR9Vill8QSTLw8OPusHyWh-AGUWbGvhXhBq7qYePuTBmiHcIbDy216MeYVOV9K9wzcWT9RGuYwfadPzEbXpe-5SsMn1kQLej4B6FBEBuT9l_RB16vg7rK-4fel8-l5CZ20ADfV_t41GvXlKosf5yiM_rSr_w36F2xy-1HbwEsY4SdYp9olGg8lG',
    color: 'primary'
  },
  {
    id: 'cockpit-v3',
    name: 'COCKPIT CUSTOM V3',
    class: 'Lobby Theme',
    price: 450,
    rarity: 'PREMIUM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1iBczJzeWpGV12SYLfuP7yEZdwUiRJzV2vsOEviHd5ExSBT3Ae8kljQTs2WZSXxFdczsE4i26yAKub094y7lYIjN1KsEsaHkTB6PEY0LfQHsuJMOuhmSx57C2-ewIAqz2KYAhdQoxespThAYHJVhzTo89ZB91N7cYZdfB0uCGQ_oKeayZRHSd0oHCz3Xv6s_mUqkQ8CjvbDTcs5HAUr6ZcNJucpt7svUQijdgrlqg1J1h55wgfAw1a3GE3siMVhWjl8YplJYkFT3G',
    color: 'tertiary'
  }
];

export default function VaultScreen({ onShowPass }: { onShowPass: () => void }) {
  return (
    <div className="pt-12 pb-32 px-6 max-w-7xl mx-auto space-y-12">
      {/* Flash Sale Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[400px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 relative group overflow-hidden rounded-3xl glass-panel glow-secondary p-8 flex flex-col justify-end min-h-[400px]"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqD-SaOiOo9IznGT2qr7ebncj2UIFU0C8CXID7D0PLi6KbWV2tAoosi88t-90SPlIHllYpP6JSLwPtswkGm7KFlHDfSBB6Z6kL7YQ7RrHB3i3EyoC1ahvwh_2NAobbq0CcmJ7yMbyQQ85YvjUPGR2f7LItTDvQwK5jlfIpTwbnNXrHARqkPgroQlSa2S6YgDLhgWpOHhlgsObLGpnlDH3TqcptAtV3BMHgdb_OcaP_hFOC3PVD1cZsgqvgetXybG8c13r24kN91dM3" 
              alt="Flash Sale"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-black tracking-tighter uppercase font-headline animate-pulse">Flash Sale</span>
              <span className="text-secondary-fixed text-sm font-headline tracking-widest">ENDS IN 04:22:19</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter leading-none uppercase italic">
              VOID-EDGE <br/><span className="text-secondary text-glow">REAVER</span>
            </h1>
            <p className="text-on-surface-variant max-w-md font-body leading-relaxed">
              The ultimate close-quarters weapon. Infused with compressed dark matter. 30% Critical Damage bonus permanently unlocked.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <button className="px-8 py-4 rounded-full bg-gradient-to-br from-secondary to-secondary-container text-on-secondary font-headline font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(255,81,250,0.4)] active:scale-95 transition-all">
                Acquire Now — 2400 CR
              </button>
              <div className="text-on-surface-variant line-through font-headline text-xl">3500 CR</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-4 glass-panel rounded-3xl p-6 flex flex-col justify-between border-tertiary/20"
        >
          <div>
            <span className="text-tertiary font-headline text-xs tracking-[0.2em] uppercase mb-2 block">Premium Bundle</span>
            <h3 className="text-2xl font-headline font-bold text-on-surface">NEON GHOST PACK</h3>
          </div>
          <div className="py-6 flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-20 h-20 rounded-2xl glass-panel border-outline-variant/30 overflow-hidden rotate-[${(i-2)*6}deg] ${i === 2 ? 'translate-y-2' : '-translate-y-1'}`}>
                <img src={`https://picsum.photos/seed/bundle${i}/80/80`} alt="Bundle Item" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <ul className="text-xs text-on-surface-variant font-body space-y-2">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-tertiary" /> Phantom Skin (Legendary)</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-tertiary" /> 500 Flux Crystals</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-tertiary" /> Exclusive "Ghost" Title</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-tertiary/10 border border-tertiary/30 text-tertiary font-headline font-bold hover:bg-tertiary hover:text-on-tertiary transition-all">
              VIEW BUNDLE
            </button>
          </div>
        </motion.div>
      </section>

      {/* Limited Editions */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface uppercase italic">Limited Editions</h2>
            <p className="text-on-surface-variant font-body">Once they're gone, they're gone. Forever.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="p-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <div key={item.id} className="glass-panel group rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300">
              <div className="h-48 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className={`absolute top-3 left-3 px-2 py-0.5 rounded-md bg-surface-container-highest/80 backdrop-blur-md text-[10px] font-headline text-${item.color} border border-${item.color}/20`}>
                  {item.rarity}
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="font-headline font-bold text-lg text-on-surface leading-tight">{item.name}</h4>
                  <p className="text-xs text-on-surface-variant font-body">{item.class}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-${item.color} font-headline font-bold`}>{item.price} CR</span>
                  <button className={`w-10 h-10 rounded-full bg-${item.color}/10 text-${item.color} flex items-center justify-center hover:bg-${item.color} hover:text-on-primary transition-all`}>
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Currency Top-up */}
      <section className="glass-panel rounded-[2rem] p-1 border-primary/10">
        <div className="bg-surface-container rounded-[1.8rem] px-8 py-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-headline font-bold text-primary tracking-tight uppercase italic">Need More Credits?</h2>
            <p className="text-on-surface-variant font-body">Top up your balance instantly to unlock high-tier items and progress faster.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <CurrencyCard amount={500} price="$4.99" />
            <CurrencyCard amount={2500} price="$19.99" bestValue />
            <CurrencyCard amount={10000} price="$69.99" />
          </div>
        </div>
      </section>

      {/* Battle Pass CTA */}
      <section className="flex justify-center">
        <button 
          onClick={onShowPass}
          className="group relative px-12 py-6 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary transition-all"
        >
          <div className="flex items-center gap-4">
            <Star className="text-primary group-hover:animate-spin" size={32} />
            <div className="text-left">
              <h3 className="font-headline font-bold text-xl text-on-surface uppercase italic">Neon Ether Pass</h3>
              <p className="text-xs text-on-surface-variant">View Season 04 Rewards & Progress</p>
            </div>
          </div>
        </button>
      </section>
    </div>
  );
}

function CheckCircle({ size, className }: { size: number, className?: string }) {
  return (
    <div className={`w-${size} h-${size} rounded-full border border-current flex items-center justify-center ${className}`}>
      <div className="w-1 h-1 bg-current rounded-full" />
    </div>
  );
}

function CurrencyCard({ amount, price, bestValue }: { amount: number, price: string, bestValue?: boolean }) {
  return (
    <button className={`glass-panel px-6 py-4 rounded-2xl border-outline-variant/20 hover:border-primary/50 transition-all text-center min-w-[140px] relative ${bestValue ? 'border-primary/40 shadow-[0_0_15px_rgba(143,245,255,0.2)]' : ''}`}>
      {bestValue && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-on-primary-container text-[8px] font-black rounded-full uppercase">Best Value</div>
      )}
      <div className="text-primary font-black text-2xl font-headline">{amount}</div>
      <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-headline">CR</div>
      <div className="mt-2 text-sm text-on-surface font-bold">{price}</div>
    </button>
  );
}
