import React, { useState } from 'react';
import { Bolt, Gauge, Cpu, CheckCircle2, Lock, PlusCircle } from 'lucide-react';
import { motion } from 'motion/react';

const ROSTER = [
  {
    id: 'vesper-09',
    name: 'Vesper-09',
    class: 'Infiltrator Class',
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCig4BCoybeLN4LsIxxgza2OJhSV5TzzuCSkqI5dfaEj67lxTo8Pk2U4cfTwNwwmW0afS8C0o4WOTjnUK8PngiNVfVJUO60nU00umq4cTa5kipWRZ4kYn4rTAtkj-4-53Q2GelB7RKCNBrqdZsnITrH9-c3ck3VfnDor2Nneg4lZoD3Li3Mhq40Y_h7oiOtxAWollHkjpxBCgvexjUm17sSnmLnYtipRBhmjWVXfuWpEQN7dy_noaFiGws9q8YPm5jiRqOW5V3TXyJl',
    stats: { power: 88, agility: 94, tech: 72 },
    description: 'Specialized in high-frequency blade combat and phase-shift infiltration. The ultimate ghost in the machine.',
    rarity: 'Legendary Operative'
  },
  {
    id: 'bastion-x',
    name: 'Bastion-X',
    class: 'Tank Class',
    status: 'Standby',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCFg1PUQolgw0_i8YyNWwtNgXRv0Co0YBWFpd6p3Bm2zUBm_l9pCE_cfVZVs4Xz-ixFycYFzuSOW7s7XLBdqEA_ed40-bEEaR0futpIUMLFpY5rSluseV3CbnmeZHeG1axeoQKfzrwe0TwbWtidkrtTduLq-qv4W0m8cjRylt7facjYlmeKuJOKYmuwfvxZHnq52p8k-vWW5yjItWXyU_lclWRjYfwR9Ti1-4gfuJQGXjJqEgct9paz2KVCTn-sFb2p8Muy6WC7dtZ',
    stats: { power: 95, agility: 40, tech: 55 },
    description: 'Heavy armored soldier with a massive energy shield glowing orange, rugged desert battlefield background.',
    locked: true
  },
  {
    id: 'ghost-wren',
    name: 'Ghost-Wren',
    class: 'Scout Class',
    status: 'Standby',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC00VdXtVBftVPPKiWUUCSevupS9NopDRHcHBJadP0oDTpuFdD0F2jpW3A4erylWZJpnHexj6_KRv5nrxTkzIFCf_cLJGobM6ilFhSVX6eTUByegEvPteytFreYbalStFAwFl5Ry-2nUHVabDCRX9HguY7QecskHJJ8XFwdw7rADP6aLPrCU2c2uH2LyYJa5TQLy7QihHZqQtFrAJK2lkSFIU78SSZW24WOUJ_6ZURTf7qaWHND_7T7wQA7z7JB4mvLZJXIPCctU0Zr',
    stats: { power: 60, agility: 98, tech: 85 },
    description: 'Agile female scout with dual energy pistols and glowing green goggles, neon rainforest background.',
    locked: true
  }
];

export default function HeroesScreen() {
  const [selectedHero, setSelectedHero] = useState(ROSTER[0]);

  return (
    <div className="min-h-screen pt-12 pb-32 px-6 max-w-7xl mx-auto">
      {/* Selection Header */}
      <div className="mb-12">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-on-surface mb-2 uppercase">
          SELECT YOUR <span className="text-primary neon-text-primary">OPERATIVE</span>
        </h1>
        <p className="font-body text-on-surface-variant text-lg">Choose a hero to synchronize with the neural network.</p>
      </div>

      {/* Hero Carousel / Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Hero Spotlight Card */}
        <motion.div 
          key={selectedHero.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-8 group relative rounded-[2rem] overflow-hidden glass-panel aspect-[4/5] md:aspect-[16/9] p-1 shadow-2xl"
        >
          <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
            <img 
              src={selectedHero.image} 
              alt={selectedHero.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Overlay HUD */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-[10px] font-headline font-bold uppercase tracking-widest">
                    {selectedHero.rarity || 'Standard Operative'}
                  </span>
                </div>
                <h2 className="font-headline text-5xl font-black text-on-surface uppercase tracking-tighter">{selectedHero.name}</h2>
                <p className="font-body text-on-surface-variant mt-2">{selectedHero.description}</p>
              </div>
              
              <div className="flex flex-col gap-4 min-w-[240px]">
                {/* Stats Module */}
                <div className="space-y-3 bg-surface-container-high/40 backdrop-blur-md p-4 rounded-xl border border-outline-variant/20">
                  <StatRow label="POWER" value={selectedHero.stats.power} icon={Bolt} color="primary" />
                  <StatRow label="AGILITY" value={selectedHero.stats.agility} icon={Gauge} color="secondary" />
                  <StatRow label="TECH" value={selectedHero.stats.tech} icon={Cpu} color="tertiary" />
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-bold py-4 rounded-full uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all">
                  Deploy Unit
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sidebar Roster */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h3 className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Available Roster</h3>
          {ROSTER.map((hero) => (
            <button
              key={hero.id}
              onClick={() => setSelectedHero(hero)}
              className={`group relative p-4 rounded-xl glass-panel flex items-center gap-4 transition-all border-l-4 ${
                selectedHero.id === hero.id ? 'border-primary bg-primary/5' : 'border-transparent bg-surface-container-high/40 hover:bg-surface-bright'
              }`}
            >
              <div className={`w-16 h-16 rounded-lg overflow-hidden shrink-0 ${hero.locked ? 'opacity-60' : ''}`}>
                <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <div className={`text-[10px] font-headline font-bold uppercase ${hero.status === 'Active' ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {hero.status}
                </div>
                <div className="font-headline font-bold text-on-surface uppercase tracking-tight">{hero.name}</div>
                <div className="text-xs text-on-surface-variant font-body">{hero.class}</div>
              </div>
              <div className="ml-auto">
                {hero.locked ? (
                  <Lock size={18} className="text-on-surface-variant" />
                ) : (
                  <CheckCircle2 size={18} className="text-primary" />
                )}
              </div>
            </button>
          ))}

          {/* Recruit CTA */}
          <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-tertiary/10 to-transparent border border-tertiary/20 flex flex-col items-center text-center">
            <PlusCircle className="text-tertiary mb-2" size={32} />
            <h4 className="font-headline font-bold text-on-surface text-sm uppercase">Recruit New Units</h4>
            <p className="text-xs text-on-surface-variant mt-1 mb-4">Unlock more operatives in the Vault.</p>
            <button className="text-tertiary font-headline font-bold text-[10px] uppercase tracking-widest border-b border-tertiary/30 pb-1 hover:text-secondary hover:border-secondary transition-all">
              Enter Vault
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value, icon: Icon, color }: { label: string, value: number, icon: any, color: string }) {
  const colorClass = color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : 'text-tertiary';
  const bgClass = color === 'primary' ? 'bg-primary' : color === 'secondary' ? 'bg-secondary' : 'bg-tertiary';
  const shadowClass = color === 'primary' ? 'shadow-[0_0_15px_rgba(143,245,255,0.3)]' : color === 'secondary' ? 'shadow-[0_0_15px_rgba(255,81,250,0.3)]' : 'shadow-[0_0_15px_rgba(172,137,255,0.3)]';

  return (
    <div className="space-y-1">
      <div className={`flex justify-between items-center text-[10px] font-headline font-bold ${colorClass}`}>
        <div className="flex items-center gap-2">
          <Icon size={12} />
          {label}
        </div>
        <span>{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
        <div className={`h-full ${bgClass} ${shadowClass} rounded-full`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
