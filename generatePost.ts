import axios from 'axios';

const OPENAI_API_KEY = "DEIN_API_KEY_HIER";

export async function generatePostIdea(topic: string) {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt: `Gib mir eine kreative Social-Media-Post-Idee für das Thema: ${topic}`,
      max_tokens: 100,
    },
    {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data.choices[0].text.trim();
}
