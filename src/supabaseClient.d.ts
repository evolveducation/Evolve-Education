import { SupabaseClient, createClient } from '@supabase/supabase-js';

declare global {
  // eslint-disable-next-line no-var
  var supabase: SupabaseClient;
}

export {};
