// api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { question, sessionHistory } = req.body || {};
  if (!question) return res.status(400).json({ error: 'Missing question' });

  try {
    const history = (sessionHistory || [])
      .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`)
      .join('\n');
    const prompt = `You are Gensyn AI — a helpful assistant.\n${history}\nUser: ${question}\nAssistant:`;

    const r = await fetch('https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 400, temperature: 0.75, repetition_penalty: 1.08 } })
    });

    const ct = r.headers.get('content-type') || '';
    const data = ct.includes('application/json') ? await r.json() : await r.text();

    if (!r.ok) return res.status(r.status).json({ error: 'AI service error', detail: typeof data === 'string' ? data : JSON.stringify(data) });

    let answer = '';
    if (Array.isArray(data) && data[0]?.generated_text) answer = data[0].generated_text;
    else if (data?.generated_text) answer = data.generated_text;
    else if (typeof data === 'string') answer = data;
    else answer = JSON.stringify(data);

    const idx = answer.indexOf('Assistant:');
    const finalAnswer = idx !== -1 ? answer.slice(idx + 'Assistant:'.length) : answer;

    return res.status(200).json({ answer: finalAnswer.trim() });
  } catch (e) {
    return res.status(500).json({ error: 'Server error', detail: e?.message || String(e) });
  }
}
