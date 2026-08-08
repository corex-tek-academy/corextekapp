import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Optimized Supabase client configuration
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false, // Disable session persistence for better performance
    autoRefreshToken: false, // Disable auto refresh for public forms
    detectSessionInUrl: false // Disable URL session detection
  },
  db: {
    schema: 'public' // Explicit schema for better caching
  },
  global: {
    headers: {
      'X-Client-Info': 'corextekacademy-web' // Client identification
    }
  }
})
