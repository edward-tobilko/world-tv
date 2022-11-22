import { useState, useEffect } from "react";

export function useDelayInputText(searchInput: string, delay = 600) {
  const [delayInputText, setDelayInputText] = useState(searchInput);

  useEffect(() => {
    const handler = setTimeout(() => setDelayInputText(searchInput), delay);

    return () => clearTimeout(handler);
  }, [searchInput, delay]);

  return delayInputText;
}
