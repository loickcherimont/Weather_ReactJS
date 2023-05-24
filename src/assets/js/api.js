// Fetch data from Weather API 
export async function fetchAPI(url) {
    const response = await fetch(url);
    if (response.ok === true) {
        return response.json();
    }

    /** @todo Throw new error if response KO */
}

export const API_KEY = import.meta.env.API_KEY;

