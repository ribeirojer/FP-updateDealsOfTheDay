import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0";
const env = await load();

const supabaseUrl = env.SUPABASE_URL || Deno.env.get("SUPABASE_URL");
const supabaseKey = env.SUPABASE_KEY || Deno.env.get("SUPABASE_KEY");

if (!supabaseUrl) {
	console.error("supabaseUrl não configurada.");
	Deno.exit(1);
}
if (!supabaseKey) {
	console.error("supabaseKey não configurada.");
	Deno.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function updateHotDeals(deck: string, bundle: string) {
    // Atualiza no Supabase
    const { error } = await supabase
      .from("deals")
      .insert([{ deck, bundle }]);

    if (error) {
      console.error("Erro ao atualizar ofertas no Supabase:", error);
    } else {
      console.log("Ofertas do dia atualizadas com sucesso!");
    }
}