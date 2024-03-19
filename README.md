# Sorting Algorithms implemented using JavaScript

This repository contains implementations of various sorting algorithms. 
Below is a brief overview of each algorithm implemented in this repository:

## Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
- Best Time: Ω(n)
- Average Time: Θ(n^2)
- Worst Time: O(n^2)

## Selection Sort

Selection sort is a simple sorting algorithm that repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted portion of the list and moves it to the beginning.
- Best Time: Ω(n^2)
- Average Time: Θ(n^2)
- Worst Time: O(n^2)


## Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It iterates through the input array, removing one element and then finding the location it belongs to in the sorted list, and inserting it there.
- Best Time: Ω(n)
- Average Time: Θ(n^2)
- Worst Time: O(n^2)

## Quick Sort

Quick sort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays.
- Best Time: Ω(nlogn)
- Average Time: Θ(nlogn)
- Worst Time: O(n^2)

## Merge Sort

Merge sort is a highly efficient sorting algorithm that follows the divide-and-conquer principle. It divides the input array into two halves, recursively sorts each half, and then merges the sorted halves. The key step in merge sort is the merging of two sorted sub-arrays into a single sorted array.
- Best Time: Ω(nlogn)
- Average Time: Θ(nlogn)
- Worst Time: O(nlogn)

## Usage

To use these sorting algorithms, you can import the respective sorting function into your JavaScript file using the ES6 import syntax. For example:

```javascript
import { bubbleSort } from './sortingAlgorithms/bubbleSort.js';

const bubbleSortedArray = bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
console.log(bubbleSortedArray); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
