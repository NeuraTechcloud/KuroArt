import React, { useState } from 'react';
import { STUDENT_EVOLUTIONS, ANATOMY_IMAGE, PAINTING_IMAGE, MASTERPIECE_IMAGE } from '../data/kuroData';
import { Award, TrendingUp, CheckCircle, Quote } from 'lucide-react';

export const EvolutionSection: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<string>(STUDENT_EVOLUTIONS[0].id);

  const activeStudent = STUDENT_EVOLUTIONS.find(s => s.id === selectedStudent) || STUDENT_EVOLUTIONS[0];

  return (
    <section id="evolucao" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <span>Resultados Reais de Alunos</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Transformação Artística</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            A Evolução de Quem Seguiu o Método Studio Kuro
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Veja a transformação de desenhistas que começaram com traços inseguros e poses duras e hoje produzem ilustrações com acabamento profissional.
          </p>
        </div>

        {/* Student Selector Buttons (Segmented control) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-slate-900/80 rounded-2xl border border-slate-800 max-w-2xl">
          {STUDENT_EVOLUTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedStudent(s.id)}
              className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedStudent === s.id
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Case Study Card */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0e1017] border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Transformation Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {activeStudent.name}
                  </h3>
                  <div className="text-xs text-rose-400 font-medium mt-0.5">
                    {activeStudent.achievement}
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  {activeStudent.monthsInCourse}
                </span>
              </div>

              {/* Before vs After Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="text-xs font-bold text-rose-400/80 uppercase tracking-wider mb-2">
                    Antes do Método Kuro:
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeStudent.beforeStory}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                    Depois do Método Kuro:
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {activeStudent.afterStory}
                  </p>
                </div>
              </div>

              {/* Student Quote */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 italic flex items-start gap-3">
                <Quote className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>"{activeStudent.quote}"</span>
              </div>

              {/* Skills gained */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-slate-400 font-medium mr-1">Habilidades Destravadas:</span>
                {activeStudent.keySkillsGained.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Evolution Visual Representation */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-700 overflow-hidden bg-slate-950 aspect-[4/3] relative">
                <img
                  src={ANATOMY_IMAGE}
                  alt={`Evolução artística de ${activeStudent.name}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Anatomia & Linha Refinada</span>
                  <span className="text-emerald-400 font-mono">100% Autoral</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
