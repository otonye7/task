export const centsConverter = (price) => {
    return parseFloat(Math.round(price) * 0.01).toFixed(2)
}