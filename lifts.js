function elevator(left, right, call){
    const leftDistance = Math.abs(left - call);
    const rightDistance = Math.abs(right - call);

    if (leftDistance < rightDistance) {
        return "left";
    } else if (rightDistance < leftDistance) {
        return "right";
    } else {
        // If distances are equal, choose right
        return "right";
    }
}