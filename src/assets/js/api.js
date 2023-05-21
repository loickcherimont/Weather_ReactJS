// Fetch data from Weather API 
export async function fetchAPI(url) {
    const response = await fetch(url);
    if (response.ok === true) {
        return response.json();
    }
}

export const API_KEY = import.meta.env.VITE_API_KEY;

