import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("❌ Missing NEXT_PUBLIC_SUPABASE_URL in .env.local");
}
if (!supabaseServiceRoleKey) {
  throw new Error("❌ Missing SUPABASE_SERVICE_ROLE_KEY in .env.local");
}

// Safe: only used in server-side API routes
export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey);
