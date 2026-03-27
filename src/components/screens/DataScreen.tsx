import React from 'react';
import { BarChart3, Activity, Zap, Cpu } from 'lucide-react';

export default function DataScreen() {
  return (
    <div className="pt-12 pb-32 px-6 max-w-7xl mx-auto space-y-12">
      <div className="mb-12">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-on-surface mb-2 uppercase italic">
          Neural <span className="text-primary neon-text-primary">Analytics</span>
        </h1>
        <p className="font-body text-on-surface-variant text-lg">Real-time performance metrics and sector stability data.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DataCard title="Sector Stability" value="98.4%" icon={ShieldCheck} trend="+0.2%" />
        <DataCard title="Neural Load" value="42%" icon={Activity} trend="-5%" />
        <DataCard title="Sync Rate" value="1.2ms" icon={Zap} trend="Optimal" />
      </div>

      <div className="glass-panel p-8 rounded-3xl border border-primary/10">
        <h3 className="font-headline font-bold text-xl mb-6 uppercase tracking-tight">Performance History</h3>
        <div className="h-64 flex items-end gap-2">
          {[40, 60, 45, 80, 55, 90, 70, 85, 65, 95].map((h, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-lg transition-all hover:brightness-125" 
              style={{ height: `${h}%` }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ShieldCheck({ size, className }: { size: number, className?: string }) {
  return (
    <div className={`w-${size} h-${size} rounded-full border border-current flex items-center justify-center ${className}`}>
      <div className="w-1 h-1 bg-current rounded-full" />
    </div>
  );
}

function DataCard({ title, value, icon: Icon, trend }: { title: string, value: string, icon: any, trend: string }) {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-outline-variant/10">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-xl bg-surface-container-high text-primary">
          <Icon size={24} />
        </div>
        <span className="text-[10px] font-headline font-bold text-primary uppercase tracking-widest">{trend}</span>
      </div>
      <h4 className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest mb-1">{title}</h4>
      <p className="text-3xl font-headline font-black text-on-surface italic">{value}</p>
    </div>
  );
}
