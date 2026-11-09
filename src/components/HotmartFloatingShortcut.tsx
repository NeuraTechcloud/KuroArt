import React from 'react';
import { useHotmart } from '../context/HotmartContext';
import { Flame, Link2, Settings } from 'lucide-react';

export const HotmartFloatingShortcut: React.FC = () => {
  const { openModal, hasCustomLinks } = useHotmart();

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <button
        onClick={() => openModal()}
        type="button"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-black font-bold text-xs shadow-2xl shadow-rose-600/30 hover:scale-105 transition-all duration-200 border border-amber-300/40 cursor-pointer"
        aria-label="Atalho de Vendas: Configurar Links Hotmart"
      >
        <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center">
          <Flame className="w-3.5 h-3.5 text-black fill-current" />
        </div>
        <span className="tracking-tight whitespace-nowrap">
          {hasCustomLinks ? 'Hotmart Ativo' : 'Adicionar Links Hotmart'}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-ping" />
      </button>

      {/* Floating tooltip hover hint */}
      <div className="absolute bottom-full right-0 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-64 p-2.5 rounded-xl bg-slate-900/95 border border-slate-700/80 text-[11px] text-slate-300 shadow-xl text-right">
        Clique para adicionar ou trocar seus links de afiliados ou de produtor da Hotmart.
      </div>
    </div>
  );
};
