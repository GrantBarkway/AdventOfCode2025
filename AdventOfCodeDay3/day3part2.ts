import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay3/AOC3_input.txt';
    
const content: string = fs.readFileSync(filePath, 'utf-8');

const day3part2 = (input: string) => {
    const lines = input.split(/\r?\n/);
    
    return lines.map(line => {
        const line_array = line.split("").map(x => Number(x))
        // Gets index of largest value from the first n-11 spots
        const first_index = line_array.indexOf(Math.max(...line_array.slice(0,-11)));
        // Gets index of largest value from the remaining spots that follow
        const second_index_candidates = line_array.slice(first_index+1,-10)
        const second_index = first_index + second_index_candidates.indexOf(Math.max(...second_index_candidates)) + 1
        
        const third_index_candidates = line_array.slice(second_index+1,-9)
        const third_index = second_index + third_index_candidates.indexOf(Math.max(...third_index_candidates)) + 1

        const fourth_index_candidates = line_array.slice(third_index+1,-8)
        const fourth_index = third_index + fourth_index_candidates.indexOf(Math.max(...fourth_index_candidates)) + 1

        const fifth_index_candidates = line_array.slice(fourth_index+1,-7)
        const fifth_index = fourth_index + fifth_index_candidates.indexOf(Math.max(...fifth_index_candidates)) + 1

        const sixth_index_candidates = line_array.slice(fifth_index+1,-6)
        const sixth_index = fifth_index + sixth_index_candidates.indexOf(Math.max(...sixth_index_candidates)) + 1

        const seventh_index_candidates = line_array.slice(sixth_index+1,-5)
        const seventh_index = sixth_index + seventh_index_candidates.indexOf(Math.max(...seventh_index_candidates)) + 1
        
        const eighth_index_candidates = line_array.slice(seventh_index+1,-4)
        const eighth_index = seventh_index + eighth_index_candidates.indexOf(Math.max(...eighth_index_candidates)) + 1
        
        const ninth_index_candidates = line_array.slice(eighth_index+1,-3)
        const ninth_index = eighth_index + ninth_index_candidates.indexOf(Math.max(...ninth_index_candidates)) + 1

        const tenth_index_candidates = line_array.slice(ninth_index+1,-2)
        const tenth_index = ninth_index + tenth_index_candidates.indexOf(Math.max(...tenth_index_candidates)) + 1
        
        const eleventh_index_candidates = line_array.slice(tenth_index+1,-1)
        const eleventh_index = tenth_index + eleventh_index_candidates.indexOf(Math.max(...eleventh_index_candidates)) + 1
        
        const twelvth_index_candidates = line_array.slice(eleventh_index+1)
        const twelvth_index = eleventh_index + twelvth_index_candidates.indexOf(Math.max(...twelvth_index_candidates)) + 1
        
        return Number(String(line[first_index]) + String(line[second_index]) + String(line[third_index]) + String(line[fourth_index]) + String(line[fifth_index]) + String(line[sixth_index]) + String(line[seventh_index]) + String(line[eighth_index]) + String(line[ninth_index]) + String(line[tenth_index]) + String(line[eleventh_index]) + String(line[twelvth_index]))
    }).reduce((a,b) => a + b, 0)
}

console.log(day3part2(content))