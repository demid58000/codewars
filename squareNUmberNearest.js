function nearestSq(n){
    // your code
    const sqrt = Math.sqrt(n);
    const lower = Math.floor(sqrt);
    const higher = Math.ceil(sqrt);

    const lowerSquare = lower * lower;
    const higherSquare = higher * higher;

    // Определяем, какой квадрат ближе
    return (n - lowerSquare <= higherSquare - n) ? lowerSquare : higherSquare;
}