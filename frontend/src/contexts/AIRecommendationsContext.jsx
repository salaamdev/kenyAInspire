import React, { createContext, useState, useEffect } from "react";
import OpenAI from "openai";
import localforage from "localforage";

// Create the context
export const AIRecommendationsContext = createContext();

// Provider component
function AIRecommendationsContextProvider({ children }) {
  const [recommendations, setRecommendations] = useState([]);

  // Initialize OpenAI API
  const openai = new OpenAI({
    apiKey: process.env.VITE_OPENAI_API_KEY, // Using Vite environment variable
    dangerouslyAllowBrowser: true, // Only if you're calling the API directly from the browser
  });

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        // Check for offline mode
        if (!navigator.onLine) {
          const cachedData = await localforage.getItem("recommendations");
          if (cachedData) {
            setRecommendations(cachedData);
          }
          return;
        }

        // Fetch data from OpenAI API using GPT-4o mini
        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini", // Updated model
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "Generate personalized content..." },
          ],
          max_tokens: 50,
        });

        const data = response.choices[0].message.content.trim();
        setRecommendations([data]);

        // Cache data for offline use
        await localforage.setItem("recommendations", [data]);
      } catch (error) {
        console.error("Error fetching AI recommendations:", error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <AIRecommendationsContext.Provider value={{ recommendations }}>
      {children}
    </AIRecommendationsContext.Provider>
  );
}

export default AIRecommendationsContextProvider;
