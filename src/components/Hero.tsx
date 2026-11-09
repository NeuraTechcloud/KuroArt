import React from 'react';
import { useHotmart } from '../context/HotmartContext';
import { HERO_IMAGE } from '../data/kuroData';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Link2 } from 'lucide-react';

interface HeroProps {
  onOpenCurriculum: (courseId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCurriculum }) => {
  const { getCourseLink, openModal } = useHotmart();
  const mainCheckoutLink = getCourseLink('kuro-pro');

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-[#0e1018] via-[#090a0f] to-[#090a0f]">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400 mb-4">
              <span>Metodologia Studio Kuro Art</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Do Zero ao Traço Profissional</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Checkout Oficial Hotmart</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-white font-display leading-[1.1] mb-6 [text-wrap:balance]">
              Domine o Desenho Anime, Manga e Pintura Digital de Alto Nível
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Aprenda a estruturar anatomia estilizada, criar linearts dinâmicas e pintar com iluminação de cinema. O mesmo método prático usado para criar artes autorais e commissions internacionais.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href={mainCheckoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 shadow-xl shadow-rose-600/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Garantir Minha Vaga na Hotmart</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => onOpenCurriculum('kuro-pro')}
                className="px-5 py-4 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Ver Grade Curricular Completa
              </button>

              <button
                type="button"
                onClick={() => openModal('kuro-pro')}
                className="p-3.5 rounded-xl text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors flex items-center justify-center cursor-pointer"
                title="Configurar link da Hotmart deste curso"
              >
                <Link2 className="w-4 h-4" />
                <span className="sr-only">Configurar Link Hotmart</span>
              </button>
            </div>

            {/* Proof Badges (Unboxed metadata style) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantia de 7 dias Hotmart</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acesso vitalício imediato</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>40+ Brushes Studio Kuro inclusos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Art Showcase Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group">
              {/* Image Frame */}
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={HERO_IMAGE}
                  alt="Ilustração Anime Studio Kuro Art com efeitos luminosos e traço profissional"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-black/20" />
              </div>

              {/* Bottom Card Context */}
              <div className="p-5 bg-[#0e1017] border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-medium text-slate-200">Artes Autorais & Metodologia Prática</span>
                  <span>Clip Studio Paint & Photoshop</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Aulas passo a passo gravadas em altíssima definição, mostrando cada pincelada, camada, escolha de cores e decisões criativas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof Metric Strip below hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-800/60">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              4.800+
            </div>
            <div className="text-xs text-slate-400 font-medium">Alunos formados</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums mb-1 flex items-center gap-1">
              <span>4.9</span>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
            </div>
            <div className="text-xs text-slate-400 font-medium">Avaliação média na Hotmart</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              60+ Horas
            </div>
            <div className="text-xs text-slate-400 font-medium">Conteúdo prático direto ao ponto</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums mb-1">
              100%
            </div>
            <div className="text-xs text-slate-400 font-medium">Segurança e garantia Hotmart</div>
          </div>
        </div>
      </div>
    </section>
  );
};
