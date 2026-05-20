import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';

import {
  architecture,
  campaigns,
  cohortHeader,
  cohorts,
  funnel,
  kpis,
  personaOrder,
  personas,
  useCases,
} from './content.js';
import { Card, MetricCard, Pill, RecommendationCard, SectionTitle } from './ui.js';

const e = React.createElement;

function App() {
  const [personaKey, setPersonaKey] = useState(personaOrder[0]);
  const persona = useMemo(() => personas[personaKey], [personaKey]);
  const funnelMax = useMemo(() => Math.max(...funnel.map((item) => item.value)), []);
  const personaButtons = useMemo(
    () => personaOrder.map((key) => ({ key, label: personas[key].label })),
    [],
  );

  return e('div', { className: 'min-h-full grid-noise' }, [
    e('div', { key: 'wrap', className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10' }, [
      e('header', { key: 'header', className: 'flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10' }, [
        e('div', { key: 'left', className: 'max-w-3xl' }, [
          e('div', { key: 'badge', className: 'inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-200' },
            e('span', { key: 'dot', className: 'h-2 w-2 rounded-full bg-sky-300' }),
            e('span', { key: 'text' }, 'AI Growth Intelligence Platform'),
          ),
          e(
            'h1',
            { key: 'title', className: 'mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.02] text-glow' },
            'A decision system for ',
            e('span', { className: 'text-sky-300' }, 'growth teams'),
            ', not just a dashboard.',
          ),
          e('p', { key: 'desc', className: 'mt-5 text-base md:text-lg text-slate-300 leading-7 max-w-3xl' },
            'This prototype combines funnel analytics, retention intelligence, campaign analysis, experimentation, and AI reasoning so startups can identify bottlenecks and choose the next best action with confidence.',
          ),
        ]),
        e(Card, { key: 'right', className: 'p-5 md:p-6 w-full lg:w-[420px]' }, [
          e('div', { key: 'top', className: 'flex items-center justify-between' }, [
            e('div', { key: 'label' }, [
              e('div', { key: 'ey', className: 'text-xs uppercase tracking-[0.25em] text-slate-400' }, 'AI Memo'),
              e('div', { key: 'ti', className: 'mt-2 text-lg font-semibold text-white' }, 'Weekly growth summary'),
            ]),
            e('div', { key: 'status', className: 'rounded-full border border-success/20 bg-success/10 px-3 py-1 text-xs text-success' }, 'Live signal'),
          ]),
          e('p', { key: 'memo', className: 'mt-4 text-sm leading-6 text-slate-300' }, persona.memo),
          e('div', { key: 'list', className: 'mt-5 space-y-3 text-sm text-slate-300' }, [
            e('div', { key: 'a', className: 'flex items-start gap-3' }, [e('span', { key: 'dot', className: 'mt-1 h-2 w-2 rounded-full bg-sky-300' }), e('span', { key: 'text', className: 'leading-6' }, 'Activation is the main growth leak.')] ),
            e('div', { key: 'b', className: 'flex items-start gap-3' }, [e('span', { key: 'dot', className: 'mt-1 h-2 w-2 rounded-full bg-amber-300' }), e('span', { key: 'text', className: 'leading-6' }, 'One paid channel is underperforming downstream.')] ),
            e('div', { key: 'c', className: 'flex items-start gap-3' }, [e('span', { key: 'dot', className: 'mt-1 h-2 w-2 rounded-full bg-emerald-300' }), e('span', { key: 'text', className: 'leading-6' }, 'Retention improves materially when value is reached early.')] ),
          ]),
        ]),
      ]),

      e('section', { key: 'kpis', className: 'grid gap-4 md:grid-cols-2 xl:grid-cols-5 mb-10' }, kpis.map((item) => e(MetricCard, { key: item.label, ...item }))),

      e('section', { key: 'switcher', className: 'mb-10' }, [
        e(SectionTitle, {
          key: 'section',
          eyebrow: 'Persona intelligence',
          title: 'Switch the decision lens',
          subtitle: 'The platform adapts recommendations and KPI framing to the user role. That makes the product feel operational, not static.',
        }),
        e('div', { className: 'flex flex-wrap gap-3' }, personaButtons.map((item) => e(Pill, { key: item.key, active: item.key === personaKey, onClick: () => setPersonaKey(item.key) }, item.label))),
      ]),

      e('section', { key: 'main', className: 'grid gap-6 xl:grid-cols-[1.18fr_0.82fr]' }, [
        e('div', { key: 'left', className: 'space-y-6' }, [
          e(Card, { className: 'p-6' }, [
            e('div', { className: 'flex flex-col gap-4 md:flex-row md:items-start md:justify-between' }, [
              e('div', { key: 'summary' }, [
                e('div', { key: 'ey', className: 'text-xs uppercase tracking-[0.25em] text-sky-300/80' }, 'Growth Strategy Assistant'),
                e('h3', { key: 'title', className: 'mt-2 text-2xl font-bold text-white' }, persona.label + ' view'),
                e('p', { key: 'body', className: 'mt-2 text-slate-300 leading-7 max-w-2xl' }, persona.summary),
              ]),
              e('div', { key: 'north-star', className: 'rounded-2xl border border-white/10 bg-white/5 px-4 py-3 min-w-[240px]' }, [
                e('div', { key: 'label', className: 'text-xs uppercase tracking-[0.22em] text-slate-400' }, 'North Star KPI'),
                e('div', { key: 'value', className: 'mt-2 text-sm font-medium text-white leading-6' }, persona.northStar),
                e('div', { key: 'focus', className: 'mt-2 text-xs text-slate-400' }, persona.focus),
              ]),
            ]),
          ]),

          e('div', { className: 'grid gap-6 md:grid-cols-2' }, [
            e(Card, { key: 'funnel', className: 'p-6' }, [
                e(SectionTitle, {
                  key: 'section',
                eyebrow: 'Funnel analytics',
                title: 'Acquisition to activation',
                subtitle: 'This view highlights where value leaks from the user journey and how the platform should prioritize remediation.',
              }),
                e('div', { key: 'chart', className: 'space-y-4' }, funnel.map((step) => {
                const width = Math.max(12, Math.round((step.value / funnelMax) * 100));
                return e('div', { key: step.step }, [
                  e('div', { className: 'flex items-center justify-between text-sm mb-2' }, [
                    e('div', { className: 'font-medium text-white' }, step.step),
                    e('div', { className: 'text-slate-400' }, step.value + '%'),
                  ]),
                  e('div', { className: 'h-3 rounded-full bg-white/5 overflow-hidden' }, [
                    e('div', {
                      className: 'h-full rounded-full bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300',
                      style: { width: width + '%' },
                    }),
                  ]),
                  e('div', { className: 'mt-1 text-xs text-slate-400' }, step.note),
                ]);
              })),
            ]),

            e(Card, { key: 'retention', className: 'p-6' }, [
                e(SectionTitle, {
                  key: 'section',
                eyebrow: 'Retention intelligence',
                title: 'Cohort heatmap',
                subtitle: 'The first few weeks tell the story: good cohorts retain when they reach value quickly, weak cohorts decay before habit formation.',
              }),
                e('div', { key: 'heatmap', className: 'overflow-hidden rounded-2xl border border-white/10' }, [
                e('div', { className: 'grid grid-cols-7 bg-white/5 text-xs text-slate-400' }, [
                  e('div', { className: 'px-3 py-2 font-medium' }, 'Cohort'),
                  cohortHeader.map((label) => e('div', { key: label, className: 'px-3 py-2 text-center' }, label)),
                ]),
                cohorts.map((row) =>
                  e('div', { key: row[0], className: 'grid grid-cols-7 border-t border-white/8' }, [
                    e('div', { className: 'px-3 py-3 text-sm text-white font-medium' }, row[0]),
                    row.slice(1).map((value, index) =>
                      e('div', {
                        key: index,
                        className: 'px-2 py-3 text-center text-sm font-semibold',
                        style: {
                          background: `rgba(52, 211, 153, ${Math.max(0.08, value / 120)})`,
                          color: value > 55 ? '#dcfce7' : '#dbeafe',
                        },
                      }, value + '%'),
                    ),
                  ]),
                ),
              ]),
            ]),
          ]),

          e(Card, { className: 'p-6' }, [
            e(SectionTitle, {
              key: 'section',
              eyebrow: 'Campaign analysis',
              title: 'ROI and channel quality',
              subtitle: 'A growth system should compare channels by downstream value, not by top-of-funnel volume alone.',
            }),
            e('div', { key: 'table', className: 'overflow-hidden rounded-2xl border border-white/10' }, [
              e('div', { className: 'grid grid-cols-4 bg-white/5 text-xs uppercase tracking-[0.18em] text-slate-400' }, [
                e('div', { className: 'px-4 py-3' }, 'Channel'),
                e('div', { className: 'px-4 py-3' }, 'CAC'),
                e('div', { className: 'px-4 py-3' }, 'LTV'),
                e('div', { className: 'px-4 py-3' }, 'ROI'),
              ]),
              campaigns.map((row) =>
                e('div', { key: row.channel, className: 'grid grid-cols-4 border-t border-white/8 text-sm' }, [
                  e('div', { className: 'px-4 py-4 text-white font-medium' }, row.channel),
                  e('div', { className: 'px-4 py-4 text-slate-300' }, row.cac),
                  e('div', { className: 'px-4 py-4 text-slate-300' }, row.ltv),
                  e('div', { className: 'px-4 py-4 flex items-center justify-between gap-3' }, [
                    e('span', { className: 'text-white font-semibold' }, row.roi),
                    e('span', { className: 'rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300' }, row.status),
                  ]),
                ]),
              ),
            ]),
          ]),
        ]),

        e('div', { key: 'right', className: 'space-y-6' }, [
          e(Card, { className: 'p-6' }, [
            e(SectionTitle, {
              key: 'section',
              eyebrow: 'AI growth recommendations',
              title: 'What should the team do next?',
              subtitle: 'Each recommendation is ranked by likely leverage and business impact, which is what makes the system useful to real operators.',
            }),
            e('div', { key: 'list', className: 'space-y-4' }, persona.recommendations.map((item) => e(RecommendationCard, { key: item.title, item }))),
          ]),

          e(Card, { className: 'p-6' }, [
            e(SectionTitle, {
              key: 'section',
              eyebrow: 'Product intelligence',
              title: 'How the platform reasons',
              subtitle: 'The system connects metric anomalies, funnel behavior, cohort quality, and historical outcomes to generate actionable guidance.',
            }),
            e('div', { key: 'grid', className: 'grid gap-3 sm:grid-cols-2' }, architecture.map((item, index) =>
              e('div', { key: item, className: 'rounded-2xl border border-white/10 bg-white/5 p-4' }, [
                e('div', { className: 'text-xs uppercase tracking-[0.18em] text-sky-300/80' }, String(index + 1).padStart(2, '0')),
                e('div', { className: 'mt-2 text-sm font-medium text-white' }, item),
              ]),
            )),
          ]),

          e(Card, { className: 'p-6' }, [
            e(SectionTitle, {
              key: 'section',
              eyebrow: 'Startup use cases',
              title: 'Where this becomes valuable',
              subtitle: 'The same core system adapts across SaaS, consumer, marketplace, and DTC business models.',
            }),
            e('div', { key: 'list', className: 'space-y-3 text-sm text-slate-300' }, useCases.map((item) =>
              e('div', { key: item, className: 'flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4' }, [
                e('span', { className: 'mt-1 h-2 w-2 rounded-full bg-sky-300' }),
                e('span', { className: 'leading-6' }, item),
              ]),
            )),
          ]),
        ]),
      ]),

      e('section', { key: 'footer', className: 'mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]' }, [
        e(Card, { className: 'p-6' }, [
          e(SectionTitle, {
            key: 'section',
            eyebrow: 'Interview positioning',
            title: 'How to present this project',
            subtitle: 'Use the project to show product thinking, AI systems design, and growth strategy instead of just visual polish.',
          }),
          e('div', { key: 'list', className: 'grid gap-3 text-sm text-slate-300' }, [
            e('div', { className: 'rounded-2xl border border-white/10 bg-white/5 p-4' }, '1. The platform solves decision fatigue, not just reporting.'),
            e('div', { className: 'rounded-2xl border border-white/10 bg-white/5 p-4' }, '2. Every recommendation includes evidence, confidence, and expected impact.'),
            e('div', { className: 'rounded-2xl border border-white/10 bg-white/5 p-4' }, '3. The system is designed around metric trees, experiments, and business outcomes.'),
          ]),
        ]),
        e(Card, { className: 'p-6' }, [
          e(SectionTitle, {
            key: 'section',
            eyebrow: 'MVP scope',
            title: 'What to build first',
            subtitle: 'A portfolio-grade MVP should prove that the system can diagnose a bottleneck and recommend a high-leverage next step.',
          }),
          e('div', { key: 'list', className: 'space-y-3 text-sm text-slate-300' }, [
            e('div', { className: 'rounded-2xl border border-white/10 bg-white/5 p-4' }, 'Event ingestion and metric schema.'),
            e('div', { className: 'rounded-2xl border border-white/10 bg-white/5 p-4' }, 'Funnel, retention, and campaign analytics.'),
            e('div', { className: 'rounded-2xl border border-white/10 bg-white/5 p-4' }, 'AI summaries and prioritized recommendations.'),
          ]),
        ]),
      ]),
    ]),
  ]);
}

ReactDOM.createRoot(document.getElementById('root')).render(e(App));