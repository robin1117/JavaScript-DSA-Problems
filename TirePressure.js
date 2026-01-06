/*
-------------------------------------------------
📝 Problem:Tire Pressure
-------------------------------------------------
Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

1 bar equal 14.5038 psi.
Return an array with the following values for each tire:

"Low" if the tire pressure is below the minimum allowed.
"Good" if it's between the minimum and maximum allowed.
"High" if it's above the maximum allowed.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/


function tireStatus(pressuresPSI, rangeBar) {
  let pressureBAR = pressuresPSI.map((psi) => psi / 14.5038)

  let [minBAR, maxBAR] = rangeBar

  let out = pressureBAR = pressureBAR.map((perBAR) => {
    if (maxBAR < perBAR) return 'High'
    if (minBAR > perBAR) return 'Low'
    return 'Good'
  })

  return out;
}

console.log(tireStatus([32, 28, 35, 30], [2, 2.3])) 