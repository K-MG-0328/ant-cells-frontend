'use client';

import { useState } from 'react';

export default function StockRecommendationPage() {
  const [question, setQuestion] = useState('');

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#07070f] pt-10">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            주식 추천
            <span className="ml-2 text-sm font-normal text-indigo-500">AI 분석</span>
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            궁금한 종목이나 투자 관련 질문을 입력하세요.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <textarea
            className="w-full resize-none rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-white/5 dark:bg-white/[0.03] dark:text-zinc-50 dark:placeholder-zinc-500"
            rows={4}
            placeholder="예) 삼성전자 지금 매수해도 될까요? 또는 반도체 관련 추천 종목 알려주세요."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="mt-3 flex justify-end">
            <button
              disabled={question.trim() === ''}
              className="inline-flex h-9 items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              질문 전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
