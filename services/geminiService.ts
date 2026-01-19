
// Adhering to @google/genai guidelines for client initialization and response property access
import { GoogleGenAI } from "@google/genai";

export const getCodebytAssistantResponse = async (userMessage: string) => {
  // Directly verify API key availability from environment variables as per guidelines
  if (!process.env.API_KEY) return "I'm sorry, I'm currently offline. Please contact us via the form below!";

  try {
    // Guidelines require using process.env.API_KEY directly in the GoogleGenAI constructor
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // Using gemini-3-pro-preview for complex reasoning tasks as per guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the Codebyt AI Consultant. Codebyt is a premium digital agency. 
        Your goal is to help potential clients understand our services (Web Dev, SEO, Marketing, Branding, Maintenance).
        Be professional, confident, and growth-oriented. Keep responses concise and focused on how we can help them scale.
        Mention that they can 'Get a Free Consultation' if they want to talk to our human experts.`,
        temperature: 0.7,
      },
    });

    // Use .text property to retrieve the generated content as a string, avoiding text() method call
    return response.text || "I'm here to help you scale your business. What would you like to know about our services?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong while thinking. How about we discuss your project directly? Click 'Get a Free Consultation'!";
  }
};
