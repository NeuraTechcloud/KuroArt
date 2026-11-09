import React, { useState } from 'react';
import { METHOD_PILLARS, ANATOMY_IMAGE, PAINTING_IMAGE } from '../data/kuroData';
import { Layers, PenTool, Palette, Sparkles, Check } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<number>(0);

  const workflowStages = [
    {
      title: 'Fase 1: Estruturação & Gestual',
      subtitle: 'O esqueleto 3D que impede personagens tortos',
      image: ANATOMY_IMAGE,
      badge: 'Fundamento',
      points: [
        'Construção com formas geométricas simples (caixas, cilindros, esferas)',
        'Linha de ação expressiva para poses dinâmicas com impacto',
        'Distribuição correta do centro de gravidade e equilíbrio',
      ],
      description: 'O maior erro de quem desenha anime é tentar fazer o acabamento direto no papel em branco. No Método Kuro, você aprende a mannequinizar o corpo em 30 segundos, garantindo proporção anatômica sólida antes de qualquer detalhe.',
    },
    {
      title: 'Fase 2: Linework & Peso de Traço',
      subtitle: 'O traço limpo e confiante dos mangakás japoneses',
      image: ANATOMY_IMAGE,
      badge: 'Inking Digital',
      points: [
        'Técnica do traço contínuo e uso inteligente da pressão da caneta',
        'Variação de espessura: linhas mais grossas em pontos de oclusão e sombra',
        'Drapeado fluido de roupas e fios de cabelo estilizados',
      ],
      description: 'Diga adeus àquele traço "peludo" e inseguro. Ensinamos a técnica do traço confiante, ensinando a posicionar o pulso e o cotovelo e como calibrar a estabilização no software para linhas perfeitas.',
    },
    {
      title: 'Fase 3: Cores Base & Oclusão Ambiental',
      subtitle: 'A separação de planos que cria volume imediato',
      image: PAINTING_IMAGE,
      badge: 'Sombreamento',
      points: [
        'Separação por máscaras e camadas organizadas de forma profissional',
        'Cores locais harmônicas sem saturação excessiva que cansa a vista',
        'Oclusão de sombras nos cantos onde a luz não alcança',
      ],
      description: 'Muitos artistas erram na hora de sombrear usando apenas preto ou cinza com baixa opacidade. Mostramos como aplicar a oclusão ambiental com matizes complementares que dão riqueza cromática imediata.',
    },
    {
      title: 'Fase 4: Iluminação Dramática & Glow',
      subtitle: 'O acabamento cinematográfico com estilo de estúdio',
      image: PAINTING_IMAGE,
      badge: 'Render Final',
      points: [
        'Luz de recorte (Rim Light) que destaca o personagem do fundo',
        'Reflexos especulares em olhos, armaduras, espadas e tecidos',
        'Efeitos de partículas, bloom e gradientes de pós-produção',
      ],
      description: 'É nesta etapa que a ilustração se transforma em uma obra-prima de estúdio. Você dominará os modos de mesclagem (Color Dodge, Add Glow, Overlay) que os mestres japoneses usam nas animações de cinema.',
    },
  ];

  return (
    <section id="metodo" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#090a0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <span>Metodologia Comprovada</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>O Método Kuro de Ilustração</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display leading-tight mb-4 [text-wrap:balance]">
            Por que o Método Studio Kuro Funciona Até Para Quem Acha Que Não Tem Dom?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Desenho não é mágica ou talento inato — é um sistema lógico de observação, simplificação geométrica e aplicação técnica. Desenvolvemos um passo a passo estruturado para acelerar seu aprendizado em até 5 vezes.
          </p>
        </div>

        {/* 5 Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {METHOD_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className={`p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-bold font-mono tracking-widest text-rose-400">
                  {pillar.number}.
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {pillar.subtitle}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Breakdown of the 4 Stages */}
        <div className="rounded-2xl border border-slate-800 bg-[#0e1017] p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-rose-400 tracking-wider uppercase">
                Demonstração Passo a Passo
              </span>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                O Fluxo de Criação em 4 Etapas
              </h3>
            </div>

            {/* Stage Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
              {workflowStages.map((stage, idx) => (
                <button
                  key={stage.title}
                  onClick={() => setActiveWorkflowTab(idx)}
                  type="button"
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    activeWorkflowTab === idx
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Fase 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Stage Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                {workflowStages[activeWorkflowTab].badge}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                {workflowStages[activeWorkflowTab].title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {workflowStages[activeWorkflowTab].description}
              </p>

              <div className="space-y-2.5 pt-2">
                {workflowStages[activeWorkflowTab].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[4/3]">
                <img
                  src={workflowStages[activeWorkflowTab].image}
                  alt={workflowStages[activeWorkflowTab].title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-xs text-slate-300 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                  {workflowStages[activeWorkflowTab].subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Software Compatibility Strip */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-white">Compatível com o seu software favorito</h4>
            <p className="text-xs text-slate-400 mt-1">
              O método foca em princípios artísticos universais, funcionando perfeitamente em qualquer aplicativo.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">Clip Studio Paint</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">Adobe Photoshop</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">Procreate (iPad)</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">IbisPaint X (Mobile)</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">Krita & SAI</span>
          </div>
        </div>
      </div>
    </section>
  );
};
