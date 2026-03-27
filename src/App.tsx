import React, { useState } from 'react';
import Layout from './components/Layout';
import CommandScreen from './components/screens/CommandScreen';
import HeroesScreen from './components/screens/HeroesScreen';
import VaultScreen from './components/screens/VaultScreen';
import PassScreen from './components/screens/PassScreen';
import DataScreen from './components/screens/DataScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('command');
  const [showPass, setShowPass] = useState(false);

  // If showPass is true and we are in the vault tab, show the pass screen
  const renderScreen = () => {
    if (activeTab === 'vault' && showPass) {
      return <PassScreen onBack={() => setShowPass(false)} />;
    }

    switch (activeTab) {
      case 'command':
        return <CommandScreen />;
      case 'heroes':
        return <HeroesScreen />;
      case 'vault':
        return <VaultScreen onShowPass={() => setShowPass(true)} />;
      case 'data':
        return <DataScreen />;
      default:
        return <CommandScreen />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={(tab) => {
      setActiveTab(tab);
      setShowPass(false); // Reset pass view when switching tabs
    }}>
      {renderScreen()}
    </Layout>
  );
}
