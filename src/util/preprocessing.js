export function preprocessInputText(inputText) {
    let result = inputText.toLowerCase().trim();
    result = result.replace(/[\r\n]+/gm, " ");
    return result.trim()
}

function parseRussianText(text) {
    if (text.indexOf("(") >= 0) {
        return text.slice(0, -(text.length - text.indexOf("("))).trim();
    }
    return text.trim();
}

export function getVariants(response) {
    let result = response.data.result.map(field => {
        return ({"artist": parseRussianText(field["artist"]), "track": parseRussianText(field["title"])});
    });

    result = Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);

    return result
}