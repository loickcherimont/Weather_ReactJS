// Fetch data from Weather API 
export async function fetchAPI(url) {
    const response = await fetch(url);
    if (response.ok === true) {
        return response.json();
    }
}

