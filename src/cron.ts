import { flashcardSets } from "./flashcardSets.ts";
import { bundles } from "./bundles.ts";
import { updateHotDeals } from "./supabase.ts";
// Função para atualizar as ofertas do dia
async function updateDealsOfTheDay() {
  try {
    const deckOfTheDay =
      flashcardSets[Math.floor(Math.random() * flashcardSets.length)];
    const bundleOfTheDay =
      bundles[Math.floor(Math.random() * bundles.length)];

	await updateHotDeals(deckOfTheDay.id, bundleOfTheDay.id)
  } catch (err) {
    console.error("Erro ao executar o cron job:", err);
  }
}

// Cron job para rodar todos os dias à meia-noite
Deno.cron("Atualiza as promoções","0 0 * * *", () => {
  console.log("Executando cron job para atualizar as ofertas do dia...");
  updateDealsOfTheDay()
  .then(() => console.log("Cron job concluído com sucesso."))
  .catch((error) => console.error("Erro no cron job:", error));
});
