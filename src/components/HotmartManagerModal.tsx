import React, { useState, useEffect } from 'react';
import { useHotmart } from '../context/HotmartContext';
import { COURSES } from '../data/kuroData';
import {
  X,
  Link2,
  Check,
  Copy,
  ExternalLink,
  RotateCcw,
  Sparkles,
  HelpCircle,
  AlertCircle,
  Download,
  Upload,
  Flame,
} from 'lucide-react';

export const HotmartManagerModal: React.FC = () => {
  const {
    isModalOpen,
    closeModal,
    config,
    saveAllLinks,
    resetToDefaults,
    activeCourseForEdit,
  } = useHotmart();

  const [links, setLinks] = useState<Record<string, string>>({});
  const [affiliateCode, setAffiliateCode] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeTab, setActiveTab] = useState<'links' | 'tutorial'>('links');

  useEffect(() => {
    if (isModalOpen) {
      setLinks({ ...config.links });
      setAffiliateCode(config.globalAffiliateCode || '');
      if (activeCourseForEdit) {
        setActiveTab('links');
      }
    }
  }, [isModalOpen, config, activeCourseForEdit]);

  if (!isModalOpen) return null;

  const handleLinkChange = (courseId: string, value: string) => {
    setLinks(prev => ({
      ...prev,
      [courseId]: value,
    }));
  };

  const handleCopy = (courseId: string, link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedId(courseId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleTestLink = (link: string) => {
    if (!link) return;
    let url = link.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveAllLinks(links, affiliateCode);
  };

  const handleExport = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ links, affiliateCode }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'studiokuro_hotmart_links.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.links) {
          setLinks(prev => ({ ...prev, ...parsed.links }));
        }
        if (parsed.affiliateCode !== undefined) {
          setAffiliateCode(parsed.affiliateCode);
        }
      } catch {
        alert('Arquivo JSON inválido.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-3xl bg-[#0e1017] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-amber-600/20">
              <Flame className="w-5 h-5 fill-amber-300 text-amber-200" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
                Atalho de Vendas Hotmart
                <span className="text-[11px] font-normal text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                  Configurador de Links
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Personalize os links de checkout dos cursos. Ao salvar, todos os botões do site direcionam para seus links da Hotmart.
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center border-b border-slate-800 px-6 gap-6 bg-[#090a0f]">
          <button
            onClick={() => setActiveTab('links')}
            className={`py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'links'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Meus Links de Cursos
          </button>
          <button
            onClick={() => setActiveTab('tutorial')}
            className={`py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'tutorial'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Como pegar seus links na Hotmart
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[68vh] overflow-y-auto">
          {activeTab === 'tutorial' ? (
            <div className="space-y-6 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs">
                <p className="font-semibold mb-1">Passo a passo rápido para pegar seus links na plataforma Hotmart:</p>
                <p className="text-amber-300/80">
                  Você pode usar tanto links de <strong>Produtor</strong> quanto links de <strong>Afiliado</strong> (Hotlinks).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 text-xs font-bold flex items-center justify-center">1</span>
                    <h3 className="font-semibold text-white text-sm">Acesse o Painel Hotmart</h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    Faça login em <a href="https://app.hotmart.com" target="_blank" rel="noreferrer" className="text-amber-400 underline">hotmart.com</a>. No menu lateral, clique em <strong>Produtos</strong> &gt; <strong>Meus Produtos</strong> (ou Sou Afiliado).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 text-xs font-bold flex items-center justify-center">2</span>
                    <h3 className="font-semibold text-white text-sm">Selecione o Curso</h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    Clique no seu curso cadastrado (por exemplo: Curso de Ilustração Anime) e vá na aba <strong>Links de Divulgação (Hotlinks)</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 text-xs font-bold flex items-center justify-center">3</span>
                    <h3 className="font-semibold text-white text-sm">Copie o Link da Página de Pagamento</h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    Copie a URL direta do checkout (geralmente começa com <code>pay.hotmart.com/...</code> ou <code>go.hotmart.com/...</code>).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 text-xs font-bold flex items-center justify-center">4</span>
                    <h3 className="font-semibold text-white text-sm">Cole Aqui e Salve</h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    Cole no campo do curso desejado na aba ao lado e clique em <strong>Salvar Todos os Links</strong>. O site atualizará instantaneamente!
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveTab('links')}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Ir para Meus Links de Cursos
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Optional Affiliate / Tracking Tag */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Código de Rastreamento / Parâmetro SRC Opcional
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={affiliateCode}
                    onChange={e => setAffiliateCode(e.target.value)}
                    placeholder="Ex: instagram_bio ou campanha_lancamento"
                    className="flex-1 px-3.5 py-2 text-xs bg-[#090a0f] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <span className="text-[11px] text-slate-500 hidden sm:inline whitespace-nowrap">
                    Adicionado automaticamente aos links
                  </span>
                </div>
              </div>

              {/* Course Links Inputs */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Links Individuais de Checkout por Curso
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    {COURSES.length} cursos disponíveis
                  </span>
                </div>

                {COURSES.map(course => {
                  const currentLink = links[course.id] || '';
                  const isCurrentTarget = activeCourseForEdit === course.id;

                  return (
                    <div
                      key={course.id}
                      className={`p-4 rounded-xl border transition-all ${
                        isCurrentTarget
                          ? 'bg-amber-950/20 border-amber-500/50 ring-1 ring-amber-500/30'
                          : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-10 h-10 rounded-lg object-cover border border-slate-800 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-white">
                              {course.title}
                            </h4>
                            <p className="text-[11px] text-slate-400">
                              Preço sugerido: R$ {course.price} ({course.installments})
                            </p>
                          </div>
                        </div>
                        {isCurrentTarget && (
                          <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                            Selecionado
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-2">
                        <div className="relative flex-1">
                          <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                          <input
                            type="url"
                            value={currentLink}
                            onChange={e => handleLinkChange(course.id, e.target.value)}
                            placeholder="https://pay.hotmart.com/SEU_CODIGO"
                            className="w-full pl-9 pr-3 py-2 text-xs bg-[#090a0f] border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 font-mono"
                          />
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {/* Test Link Button */}
                          <button
                            type="button"
                            onClick={() => handleTestLink(currentLink)}
                            disabled={!currentLink}
                            className="px-2.5 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
                            title="Testar link no navegador"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Testar</span>
                          </button>

                          {/* Copy Link Button */}
                          <button
                            type="button"
                            onClick={() => handleCopy(course.id, currentLink)}
                            disabled={!currentLink}
                            className="px-2.5 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
                            title="Copiar link"
                          >
                            {copiedId === course.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400 hidden sm:inline">Copiado</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Copiar</span>
                              </>
                            )}
                          </button>

                          {/* Reset to default */}
                          <button
                            type="button"
                            onClick={() => handleLinkChange(course.id, course.defaultHotmartLink)}
                            className="p-2 text-xs text-slate-500 hover:text-slate-300 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                            title="Restaurar link padrão de demonstração"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Utility Tools: Export / Import / Reset */}
              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleExport}
                    className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Exportar Backup JSON
                  </button>
                  <label className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    Importar JSON
                    <input type="file" accept=".json" onChange={handleImport} className="hidden" />
                  </label>
                </div>

                <button
                  type="button"
                  onClick={resetToDefaults}
                  className="flex items-center gap-1 text-rose-400/80 hover:text-rose-300 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Restaurar Todos os Padrões
                </button>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  Salvar Todos os Links Hotmart
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
