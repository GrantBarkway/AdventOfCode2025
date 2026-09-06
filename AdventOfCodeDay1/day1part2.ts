import * as fs from 'fs'

import { Scan } from '../Library.ts'

const filePath: string = 'AdventOfCodeDay1/AOC1_input.txt'
const content = fs.readFileSync(filePath, 'utf-8')

const day1part2 = (input: string) => {
    const lines = input.split(/\r?\n/)
    
    // Magnitudes of rotations. If the rotations are left, they are considered to have negative magnitude
    const rotation_magnitudes = lines.map(x => {
        const magnitude = parseInt(x.slice(1))
        return x.slice(0,1) === "L"
            ? -magnitude
            : magnitude
    })
    
    // Constructs a list of all positions that the dial ends at, and maps these values to a corresponding magnitude to determine how many times the dial landed on or passed 0
    return [50,...Scan(
            rotation_magnitudes,
            (cur: number, next: number) => (((cur + next) % 100) + 100 ) % 100,
            50
        )].map((x,i) => {
            // Corresponding rotation to a given position
            const rot = rotation_magnitudes[i]!
            // Next position of the dial after rotation. Can be above 100 or below 0 to determine if it passes or lands on 0 but is not a complete rotation
            const new_pos = x + (rot % 100)
            // number of complete rotations (each complete rotation is 100 positions)
            const full_rotations = Math.floor((Math.abs(rot))/100)
            // Assigns full_rotations if only full rotations pass 0, or 1 + full_rotations if the rotations passes 0 but is not a complete rotation
            return (new_pos >= 100 && x !== 0)
                ? 1 + full_rotations
                : (new_pos <= 0 && x !== 0)
                    ? 1 + full_rotations
                    : full_rotations
        }
    )
    // Removes the null value at the end (from comparing different indices) and sums total rotations
    .filter(x => !isNaN(x))
    .reduce((a,b) => a + b, 0)
}