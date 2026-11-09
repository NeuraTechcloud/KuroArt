import React from 'react';
import { useHotmart } from '../context/HotmartContext';
import { ExternalLink, Flame, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { openModal } = useHotmart();

  return (
    <footer className="bg-[#06070a] text-slate-400 text-xs border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/60">
          {/* Col 1: Wordmark & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white text-xs font-black">
                黒
              </span>
              <span className="font-display tracking-wider">
                STUDIO KURO <span className="text-rose-500">ART</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Academia de formação artística focada em ilustração anime, character design e pintura digital com metodologia prática para quem sonha em produzir arte com padrão de estúdio.
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/studiokuroart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <span>Siga @studiokuroart no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Navegação Rápida
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Cursos & Formações
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-white transition-colors">
                  O Método Kuro
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria de Ilustrações
                </a>
              </li>
              <li>
                <a href="#evolucao" className="hover:text-white transition-colors">
                  Evolução dos Alunos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hotmart Integration & Creator Tools */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Painel do Criador / Vendedor</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Precisa alterar os links de checkout dos cursos para os seus próprios links da Hotmart? Use o atalho abaixo:
            </p>
            <button
              onClick={() => openModal()}
              type="button"
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Gerenciar Meus Links Hotmart</span>
            </button>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Processamento e pagamentos seguros via Hotmart</span>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Studio Kuro Art. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Privacidade</span>
            <span>·</span>
            <span>Termos de Uso</span>
            <span>·</span>
            <span>Garantia 7 Dias</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
