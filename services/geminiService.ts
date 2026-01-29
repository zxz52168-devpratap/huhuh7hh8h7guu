import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PORTFOLIO_OWNER, PROJECTS, SKILLS, EXPERIENCE } from '../constants';

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for the portfolio website of ${PORTFOLIO_OWNER}.
Your goal is to answer visitor questions about ${PORTFOLIO_OWNER}'s skills, projects, and experience based on the following data:

Projects: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, description: p.description, tech: p.technologies })))}
Skills: ${JSON.stringify(SKILLS)}
Experience: ${JSON.stringify(EXPERIENCE)}

Keep answers concise, professional, and friendly.
If asked about contact info, encourage them to use the contact form or social links on the site.
If asked about something not in the data, politely say you don't have that information but they can ask ${PORTFOLIO_OWNER} directly.
`;

export const chatWithPortfolio = async (userMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, my AI brain is currently offline (API Key missing). Please contact the developer directly.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};