import * as fs from 'fs';

const filePath: string = 'AdventOfCodeDay1/AOC1_input.txt';

function solveSafe(filePath: string) {
    const content: string = fs.readFileSync(filePath, 'utf-8')
    const lines: string[] = content.split(/\r?\n/);
    
    let total_number: number = 0;
    let pos: number = 50;
    let direction: string;
    let magnitude: number;
    
    for (const line of lines) {
        direction = line.slice(0,1);
        magnitude = Number.parseInt(line.slice(1));
        if (direction == "L") {
            pos = (((pos - magnitude) + 100) % 100) % 100;
        } else if (direction == "R") {
            pos = (((pos + magnitude) + 100) % 100) % 100;
        }
        
        if (pos == 0) {
            total_number += 1;
        }
    }
    return total_number;
}

console.log(solveSafe(filePath))