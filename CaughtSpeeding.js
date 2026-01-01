/*
-------------------------------------------------
📝 Problem: Caught Speeding
-------------------------------------------------
Given an array of numbers representing the speed at which vehicles were observed traveling, and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, followed by the average amount beyond the speed limit of those vehicles.
If there were no vehicles speeding, return [0, 0].
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function speeding(speeds, limit) {
    let count = 0
    let sum = 0
    speeds.forEach((speed) => {
        if (speed > limit) {
            count++
            sum += Math.abs(speed - limit)
        }
    })
    return [count, !(sum / count) ? 0 : (sum / count)];
}

speeding([100, 105, 95, 102], 100)