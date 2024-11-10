// app/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// app/types/index.ts
export interface Article {
  id: number
  title: string
  url: string
  source: string
  published_at: string
  votes: number
}

export interface Vote {
  articleId: number
  voteType: 'up' | 'down'
}

// .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

// app/page.tsx
import { Metadata } from 'next'
import HomePage from './components/HomePage'

export const metadata: Metadata = {
  title: 'Firearms News Aggregator',
  description: 'Aggregated firearms news from across the web',
}

export default function Page() {
  return <HomePage />
}

// app/components/HomePage.tsx
'use client'

import { useEffect, useState } from 'react'
import { Article } from '../types'
import { supabase } from '../lib/supabase'
import { formatDistanceToNow } from 'date-fns'

export default function HomePage() {
  // Previous frontend code goes here, with proper TypeScript types
  // Copy the content from the previous frontend artifact but update it
  // to use proper Next.js 13+ conventions and TypeScript
}
