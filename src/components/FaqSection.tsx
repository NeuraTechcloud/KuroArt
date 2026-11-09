import React, { useState } from 'react';
import { FAQ_LIST } from '../data/kuroData';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#090a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Tudo o que você precisa saber antes de iniciar sua jornada com o Studio Kuro.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-white hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold font-display">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rose-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    <p>{item.answer}</p>
                    <div className="mt-3 text-[11px] font-mono text-slate-500">
                      Categoria: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Security Guarantee Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-slate-900/50 to-slate-900/50 border border-emerald-500/20 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <span className="font-bold text-sm">7D</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Garantia Incondicional de 7 Dias Hotmart</h4>
            <p className="text-xs text-slate-300 mt-1">
              Experimente todo o curso por 7 dias. Se não sentir evolução evidente no seu traço, você pede reembolso com 1 clique diretamente na Hotmart e recebe 100% do seu dinheiro de volta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
