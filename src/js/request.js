import loaderToggle from "./loader";

const request = async (resource) => {
    try {
        loaderToggle(true)
        const res = await fetch(resource)
        const data = await res.json()
        loaderToggle(false)
        return data
    } catch (err) {
        loaderToggle(false)
        console.error("REQUEST ERROR:", err)
        return []   // ✅ Shunchaki undefined bo‘lmasin
    }
}

export default request
