import React, { useState } from 'react';
import { useHotmart } from '../context/HotmartContext';
import { Link2, Menu, X, ExternalLink, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { openModal, hasCustomLinks } = useHotmart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform">
              黒
            </span>
            <span className="font-display tracking-wider">
              STUDIO KURO <span className="text-rose-500">ART</span>
            </span>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#cursos" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Cursos
            </a>
            <a href="#metodo" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Método Kuro
            </a>
            <a href="#galeria" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Galeria de Artes
            </a>
            <a href="#evolucao" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Evolução dos Alunos
            </a>
            <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: Actions (Hotmart Shortcut & Primary CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Dedicated Hotmart Links Shortcut Button */}
            <button
              onClick={() => openModal()}
              type="button"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800/90 hover:bg-slate-700 text-amber-400 border border-amber-500/30 transition-all hover:border-amber-400 whitespace-nowrap shrink-0 cursor-pointer shadow-sm group"
              title="Configurar seus links da Hotmart para vender os cursos"
            >
              <Link2 className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span className="hidden sm:inline">Links Hotmart</span>
              {hasCustomLinks && (
                <span className="w-2 h-2 rounded-full bg-emerald-400" title="Links personalizados ativos" />
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#cursos"
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-lg shadow-lg shadow-rose-600/25 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Ver Cursos
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#090a0f] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#cursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-white"
          >
            Cursos Disponíveis
          </a>
          <a
            href="#metodo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-white"
          >
            O Método Kuro
          </a>
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-white"
          >
            Galeria & Portfólio
          </a>
          <a
            href="#evolucao"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-white"
          >
            Evolução dos Alunos
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-white"
          >
            Perguntas Frequentes
          </a>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30"
            >
              <Link2 className="w-4 h-4" />
              Configurar Atalhos Hotmart
            </button>
            <a
              href="https://www.instagram.com/studiokuroart"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-400 hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Instagram @studiokuroart
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
