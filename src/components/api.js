
async function fetchApi() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(`Could not get api: ${error}`);
    }
}

export { fetchApi }