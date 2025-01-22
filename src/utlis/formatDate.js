export function formatDate(unformatedDate) {
    const [year, month, day] = unformatedDate.split("-");
    return `${day}.${month}.${year}`;
}