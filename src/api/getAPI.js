export const getAPI = async (resources) => {
    const url = `https://swapi.dev/api/${resources}`
    const response = await fetch(url)
    const result = await response.json()
    return result
}