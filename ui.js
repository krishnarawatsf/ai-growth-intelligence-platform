import React from 'react';

const e = React.createElement;

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

function CardBase({ className = '', children }) {
  return e('div', { className: cx('glass rounded-3xl shadow-glow border border-white/10', className) }, children);
}

function SectionTitleBase({ eyebrow, title, subtitle }) {
  return e(
    'div',
    { className: 'mb-5' },
    e('div', { className: 'space-y-2' },
      e('div', { className: 'text-xs uppercase tracking-[0.3em] text-sky-300/80' }, eyebrow),
      e('h2', { className: 'text-2xl md:text-3xl font-bold text-white text-glow' }, title),
      e('p', { className: 'text-sm md:text-base text-slate-300 max-w-3xl leading-6' }, subtitle),
    ),
  );
}

function MetricCardBase({ label, value, delta, tone }) {
  return e(
    CardBase,
    { className: 'p-5' },
    e('div', { className: 'text-sm text-slate-400' }, label),
    e('div', { className: 'mt-3 flex items-end justify-between gap-3' },
      e('div', { className: 'text-3xl font-bold text-white' }, value),
      e('div', { className: cx('text-sm font-semibold', tone) }, delta),
    ),
  );
}

function PillBase({ active, children, onClick }) {
  return e(
    'button',
    {
      type: 'button',
      onClick,
      'aria-pressed': active,
      className: cx(
        'rounded-full px-4 py-2 text-sm font-medium transition border',
        active
          ? 'bg-sky-300 text-slate-950 border-sky-200 shadow-[0_0_25px_rgba(125,211,252,0.25)]'
          : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10',
      ),
    },
    children,
  );
}

function RecommendationCardBase({ item }) {
  return e(
    'div',
    { className: 'rounded-2xl border border-white/10 bg-white/5 p-4' },
    e('div', { className: 'flex items-start justify-between gap-4' },
      e('div', null,
        e('div', { className: 'font-semibold text-white' }, item.title),
        e('p', { className: 'mt-2 text-sm text-slate-300 leading-6' }, item.reason),
      ),
      e('div', { className: 'rounded-full bg-sky-300/10 border border-sky-300/20 px-3 py-1 text-xs text-sky-200 whitespace-nowrap' }, item.confidence),
    ),
    e('div', { className: 'mt-4 flex flex-wrap gap-2 text-xs' },
      e('span', { className: 'rounded-full bg-emerald-300/10 border border-emerald-300/20 px-2.5 py-1 text-emerald-200' }, `Impact: ${item.impact}`),
      e('span', { className: 'rounded-full bg-amber-300/10 border border-amber-300/20 px-2.5 py-1 text-amber-200' }, `Effort: ${item.effort}`),
    ),
  );
}

export const Card = React.memo(CardBase);
export const SectionTitle = React.memo(SectionTitleBase);
export const MetricCard = React.memo(MetricCardBase);
export const Pill = React.memo(PillBase);
export const RecommendationCard = React.memo(RecommendationCardBase);