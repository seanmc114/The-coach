const AI_URL = "https://loops-ai-coach.seansynge.workers.dev/api/correct";

async function aiCorrect(payload) {
  const r = await fetch(AI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await r.text();
  if (!r.ok) throw new Error(`AI error ${r.status}: ${text}`);
  return JSON.parse(text);
}

