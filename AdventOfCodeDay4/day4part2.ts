import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay4/AOC4_input.txt';

const content: string = fs.readFileSync(filePath, 'utf-8')

import { day4part1 } from './day4part1.ts'

const recursively_remove = (input: string): number => {
    // Count of how many rolls can be removed in one step
    const removed_count = day4part1(input)
    // Removes the rolls that can be removed in a single step
    const new_input = remove_rolls(input)

    // If no rolls removed, then return, otherwise recurse further
    return removed_count === 0 || new_input === input
        ? removed_count
        : removed_count + recursively_remove(new_input)
}

const remove_rolls = (input: string): string => {
    const lines = input.split(/\r?\n/);
    const num_rows = lines.length
    const num_cols = lines[0]?.length ?? 0
    const offsets = [1,-1,num_cols,num_cols+1,num_cols-1,-num_cols,-num_cols+1,-num_cols-1]
    // Indices of every element in the grid
    const indices = [...Array(num_rows * num_cols).keys()]
    const flattened_lines = lines.map(line => line.split("")).flat()

    const removable_indices = indices.filter(i => 
        flattened_lines[i] === "@"
        &&
        offsets.map(offset => {
            const offset_index = i + offset
            // Checks column boundaries to ensure that the offset index is not on the other side of the grid
            return i % num_cols === 0 && (offset === -1 || offset === num_cols-1 || offset === -num_cols-1)
                ? -1 
                : ((i + 1) % num_cols === 0 && (offset === 1 || offset === num_cols+1 || offset === -num_cols+1))
                    ? - 1
                    : offset_index
        })
        // Removes indices that are out of bounds or are not "@" character
        .filter(j =>
            j >= 0 && j < flattened_lines.length && flattened_lines[j] === "@"
        )
        .length < 4
    )

    return flattened_lines.map((item, index) => {
        return removable_indices.includes(index)
            ? "."
            : item
    })
    .join("")
    .match(new RegExp(`.{1,${num_cols}}`, 'g') ?? [])
    ?.join('\n') ?? ""
}

const day4part2 = (input: string) => {
    return recursively_remove(input)
}
