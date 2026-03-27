import React from 'react';
import { LayoutGrid, Users, ShoppingBag, BarChart3, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const tabs = [
    { id: 'command', label: 'COMMAND', icon: LayoutGrid },
    { id: 'heroes', label: 'HEROES', icon: Users },
    { id: 'vault', label: 'VAULT', icon: ShoppingBag },
    { id: 'data', label: 'DATA', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body overflow-x-hidden">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl flex justify-between items-center px-6 py-4 border-b border-primary/10 shadow-[0_8px_32px_0_rgba(0,240,255,0.1)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-primary/30 overflow-hidden shadow-[0_0_10px_rgba(143,245,255,0.2)]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf9U-XKmh6_BPvvwuCIgwHzsz-avAZmccaw0cM6KOyArvuu7zbEjMq6JUSJw1U0wzClDjYOkufP52wCH6XIGL3RpVk8PZE0cMzsktqb_k2VyhTQpN-0WyeXwuRBNuzNyBztq4rOjMviMZT4VpJxARz2Zixz7DpycKNTWcyRdi_pxL2JbD2BJpwflfsGVokAsVs_aKzG3cFH6wxR3t7Ds24fzA033KKM6ANx2zbE04YMe5_QBYiPgHnGfRdI3ZWr1BG0Pli4UmmRLJt" 
              alt="Avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-bold tracking-tighter font-headline text-lg uppercase">CORE_OS</span>
            <span className="text-[10px] text-tertiary font-headline uppercase tracking-widest opacity-70">Pilot Sync: Active</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {activeTab === 'vault' && (
            <div className="bg-surface-container-high px-3 py-1 rounded-full border border-outline-variant/20 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-xs font-headline font-bold">2,450</span>
            </div>
          )}
          <button className="text-primary hover:bg-primary/10 transition-all active:scale-95 p-2 rounded-lg">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-32 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50">
        <div className="bg-surface-container-high/50 backdrop-blur-2xl rounded-t-[2rem] border-t border-primary/15 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex justify-around items-center pb-8 pt-4 px-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center transition-all duration-300 relative ${
                  isActive ? 'text-primary' : 'text-tertiary/60 hover:text-secondary'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -inset-x-4 -inset-y-2 bg-primary/10 rounded-xl shadow-[0_0_15px_rgba(143,245,255,0.3)]"
                  />
                )}
                <Icon size={24} className="relative z-10" />
                <span className="font-headline font-bold text-[10px] tracking-widest uppercase mt-1 relative z-10">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Visual Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }} />
    </div>
  );
}
