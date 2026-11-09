import React from 'react';
import { COURSES } from '../data/kuroData';
import { useHotmart } from '../context/HotmartContext';
import { X, CheckCircle, Clock, BookOpen, ArrowRight, Gift } from 'lucide-react';

interface CurriculumModalProps {
  courseId: string | null;
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ courseId, onClose }) => {
  const { getCourseLink } = useHotmart();
  if (!courseId) return null;

  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const checkoutUrl = getCourseLink(course.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-[#0e1017] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1">
              <span>{course.badge}</span>
              <span aria-hidden="true">·</span>
              <span>{course.duration}</span>
              <span aria-hidden="true">·</span>
              <span>{course.lessonsTotal} Aulas</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {course.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Grade curricular detalhada e conteúdo programático
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modules List */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Módulos Inclusos na Formação ({course.modules.length} Módulos)
          </div>

          {course.modules.map(mod => (
            <div
              key={mod.number}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80"
            >
              <div className="flex items-baseline justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-rose-400">
                    Módulo {mod.number}
                  </span>
                  <h4 className="text-sm font-bold text-white font-display">
                    {mod.title}
                  </h4>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  {mod.lessonsCount} aulas
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-3">
                {mod.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800/50">
                {mod.topics.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/60" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bonus Assets */}
          {course.bonuses && course.bonuses.length > 0 && (
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 mt-6">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs mb-3">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>Bônus Exclusivos Inclusos Sem Custo Extra:</span>
              </div>
              <ul className="space-y-1.5">
                {course.bonuses.map((bonus, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-amber-200/90">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer with Checkout CTA */}
        <div className="p-5 border-t border-slate-800 bg-[#090a0f] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">Investimento com desconto:</div>
            <div className="text-xl font-bold text-white">
              R$ {course.price},00 <span className="text-xs font-normal text-emerald-400 font-sans">({course.installments})</span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
            >
              Fechar
            </button>
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30"
            >
              <span>Matricular-se na Hotmart</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
