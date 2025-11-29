import { GoogleGenAI } from "@google/genai";
import { QuoteRequest, AIResponse } from "../types";

const processEnvApiKey = process.env.API_KEY;

export const analyzeCarIssue = async (request: QuoteRequest): Promise<AIResponse> => {
  if (!processEnvApiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: processEnvApiKey });

  const prompt = `
    Atue como um mecânico especialista da 'Auto Elétrica Braun'.
    O cliente tem o seguinte problema:
    Nome: ${request.name}
    Veículo: ${request.vehicle}
    Problema relatado: "${request.issue}"

    Analise o problema e retorne um JSON (sem markdown, apenas JSON) com:
    1. 'technicalSummary': Um resumo técnico curto e educado do que pode estar acontecendo.
    2. 'suggestedService': Qual serviço da oficina se aplica (Troca de Óleo, Elétrica, Ar Condicionado, Alarme/Som, Mecânica Geral).
    3. 'whatsappMessage': Uma mensagem formatada pronta para enviar no WhatsApp da oficina, solicitando orçamento. A mensagem deve ser educada, informal mas profissional.

    Exemplo de saída JSON:
    {
      "technicalSummary": "Parece ser um problema na bateria ou alternador.",
      "suggestedService": "Elétrica e Baterias",
      "whatsappMessage": "Olá, me chamo João. Tenho um Gol 2010 que não está ligando. Gostaria de um orçamento para revisão elétrica."
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("Sem resposta da IA");

    return JSON.parse(text) as AIResponse;
  } catch (error) {
    console.error("Erro ao analisar problema:", error);
    // Fallback in case of error
    return {
      technicalSummary: "Não foi possível analisar automaticamente.",
      suggestedService: "Revisão Geral",
      whatsappMessage: `Olá, me chamo ${request.name}. Tenho um ${request.vehicle} e estou com o seguinte problema: ${request.issue}. Gostaria de um orçamento.`
    };
  }
};