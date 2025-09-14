import { createClient } from "@supabase/supabase-js";

// Safe: only used in server-side API routes
export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
