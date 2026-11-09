import React, { useState } from 'react';
import { GALLERY_PIECES } from '../data/kuroData';
import { GalleryItem } from '../types';
import { Maximize2, X, Sparkles, Palette } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'painting' | 'character' | 'concept'>('all');
  const [lightboxPiece, setLightboxPiece] = useState<GalleryItem | null>(null);

  const filteredPieces = filter === 'all'
    ? GALLERY_PIECES
    : GALLERY_PIECES.filter(p => p.category === filter);

  return (
    <section id="galeria" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#0c0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400 mb-3">
              <span>Portfólio & Demonstrações de Estúdio</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Artes Autorais</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Galeria Studio Kuro Art
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Exemplos do nível de acabamento, iluminação e traço ensinados em cada aula do curso.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('painting')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'painting'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Pintura & Luz
            </button>
            <button
              onClick={() => setFilter('character')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'character'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Design de Personagem
            </button>
            <button
              onClick={() => setFilter('concept')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'concept'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Concept Art
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPieces.map(piece => (
            <div
              key={piece.id}
              onClick={() => setLightboxPiece(piece)}
              className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-all duration-300 cursor-pointer group shadow-xl"
            >
              <div className="aspect-[16/11] relative overflow-hidden bg-slate-950">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-[11px] text-amber-400 font-mono mb-1">
                    <span>{piece.software}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {piece.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {piece.description}
                  </p>
                </div>
              </div>

              {/* Tags footer */}
              <div className="px-5 py-3 border-t border-slate-800/60 bg-[#0e1017] flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  {piece.tags.map(t => (
                    <span key={t} className="text-slate-400">#{t}</span>
                  ))}
                </div>
                <span className="text-rose-400 font-semibold group-hover:underline">
                  Ampliar arte
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPiece && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxPiece(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0e1017] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white font-display">
                {lightboxPiece.title}
              </h3>
              <button
                onClick={() => setLightboxPiece(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxPiece.image}
                alt={lightboxPiece.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 border-t border-slate-800 bg-slate-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-300">{lightboxPiece.description}</p>
                <div className="text-[11px] text-slate-400 font-mono mt-1">
                  Ferramentas: {lightboxPiece.software}
                </div>
              </div>
              <button
                onClick={() => setLightboxPiece(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
              >
                Voltar à Galeria
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
