import React from 'react';
import { COURSES } from '../data/kuroData';
import { useHotmart } from '../context/HotmartContext';
import { Course } from '../types';
import {
  Check,
  ArrowRight,
  Sparkles,
  BookOpen,
  Link2,
  Clock,
  Layers,
  ShieldCheck,
  Flame,
} from 'lucide-react';

interface CoursesSectionProps {
  onOpenCurriculum: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenCurriculum }) => {
  const { getCourseLink, openModal, config } = useHotmart();

  return (
    <section id="cursos" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400 mb-3">
              <span>Formações & Cursos Oficiais</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Garantia de 7 Dias Hotmart</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Escolha a Formação Ideal Para Destravar Seu Traço
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Todos os cursos contam com suporte na comunidade de alunos, arquivos de projeto abertos para download e certificado de conclusão.
            </p>
          </div>

          {/* Quick link config helper button */}
          <button
            onClick={() => openModal()}
            type="button"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-amber-500/30 hover:border-amber-400 text-amber-300 text-xs font-semibold transition-all shrink-0 cursor-pointer shadow-sm group"
          >
            <Flame className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>Gerenciar Meus Links da Hotmart</span>
          </button>
        </div>

        {/* Featured Course: Kuro Pro Banner */}
        {COURSES.filter(c => c.featured).map(course => {
          const checkoutUrl = getCourseLink(course.id);
          const isCustom = config.links[course.id] && config.links[course.id] !== course.defaultHotmartLink;

          return (
            <div
              key={course.id}
              className="mb-14 rounded-3xl bg-gradient-to-br from-slate-900 via-[#10131d] to-[#120a10] border border-rose-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  {/* Clean unboxed category kicker */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-rose-400 font-semibold">
                    <span className="bg-rose-500/15 border border-rose-500/30 px-3 py-1 rounded-full text-rose-300 uppercase tracking-wider text-[11px]">
                      {course.badge}
                    </span>
                    <span>{course.level}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.lessonsTotal} Aulas Gravadas</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display leading-tight">
                    {course.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {course.subtitle} A formação mais completa do mercado para quem quer desenhar anime e mangá profissionalmente, com passo a passo de anatomia, lineart, pintura e monetização.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {course.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                      <div className="text-xs text-slate-400 line-through">
                        De R$ {course.originalPrice},00
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                        Por R$ {course.price},00
                      </div>
                      <div className="text-xs text-emerald-400 font-medium">
                        ou {course.installments} na Hotmart
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 shadow-xl shadow-rose-600/30 transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span>Inscrever-se na Hotmart</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onOpenCurriculum(course.id)}
                        className="px-4 py-3.5 rounded-xl font-semibold text-xs text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                      >
                        Ver Módulos
                      </button>

                      <button
                        type="button"
                        onClick={() => openModal(course.id)}
                        className="p-3 rounded-xl text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors cursor-pointer"
                        title="Configurar Link Hotmart para este curso"
                      >
                        <Link2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Course Image Preview */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-[4/3] bg-slate-950 shadow-xl">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300">
                      <div className="font-semibold text-white mb-0.5">Acesso Vitalício + Atualizações</div>
                      <div className="text-[11px] text-slate-400">Assista quando e onde quiser com suporte Hotmart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* 3 Secondary Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.filter(c => !c.featured).map(course => {
            const checkoutUrl = getCourseLink(course.id);
            const isCustom = config.links[course.id] && config.links[course.id] !== course.defaultHotmartLink;

            return (
              <div
                key={course.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 flex flex-col justify-between transition-all overflow-hidden group"
              >
                <div>
                  {/* Card Image */}
                  <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-950">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-md text-[11px] font-semibold text-rose-400">
                      {course.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span>{course.level}</span>
                      <span aria-hidden="true">·</span>
                      <span>{course.duration}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display mb-2">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {course.subtitle}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {course.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="p-6 pt-0 border-t border-slate-800/60 mt-auto">
                  <div className="flex items-baseline justify-between mb-4 pt-4">
                    <div>
                      <span className="text-xs text-slate-500 line-through mr-2">
                        R$ {course.originalPrice}
                      </span>
                      <span className="text-xl font-bold text-white font-display">
                        R$ {course.price}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      {course.installments}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-rose-600 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Comprar na Hotmart</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => onOpenCurriculum(course.id)}
                      className="p-3 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
                      title="Ver conteúdo das aulas"
                    >
                      <BookOpen className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => openModal(course.id)}
                      className="p-3 rounded-xl text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors cursor-pointer"
                      title="Editar link da Hotmart deste curso"
                    >
                      <Link2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
