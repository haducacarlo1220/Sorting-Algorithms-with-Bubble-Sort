// Create an array with the specified numbers
let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Track if a swap occurred
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`); // Log the comparison
            if (arr[j] > arr[j + 1]) {
                // Swap if the current element is greater than the next
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Set swapped to true
                console.log(`Swapped ${arr[j]} and ${arr[j + 1]}`); // Log the swap
            }
        }
        // If no swaps occurred, the array is sorted
        if (!swapped) {
            break;
        }
    }
    return arr; // Return the sorted array
}

// Sort the array using Bubble Sort
let sortedArray = bubbleSort(numbers);
// Log the sorted array
console.log("Sorted Array:", sortedArray);