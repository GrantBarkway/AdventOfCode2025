import * as fs from 'fs'

const filePath: string = 'AdventOfCodeDay7/AOC7_input.txt'

const content: string = fs.readFileSync(filePath, 'utf-8')

const day7part1 = (input: string): number => {
    const lines = input.split(/\r?\n/)
    console.log(lines)
    return 0
}

console.log(day7part1(content))