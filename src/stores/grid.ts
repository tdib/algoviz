import { createSignal } from 'solid-js'
import { CellState } from '~/components/Cell/Cell'

// Grid to store the original state of the grid
const [grid, setGrid] = createSignal<CellState[][]>([
  ['S', '.', '.', '.', '.', '.'],
  ['.', '#', '.', '#', '.', '#'],
  ['.', '#', '.', '#', '.', '.'],
  ['.', '.', '#', '#', '.', '.'],
  ['#', '#', '#', 'G', '#', '.'],
  ['.', '.', '#', '.', '.', '.'],
])

// Grid used solely for displaying the algorithm's progress
const [displayGrid, setDisplayGrid] = createSignal<CellState[][]>(grid())
export function updateDisplayGridValue(i: any, j: any, value: any) {
  const newGrid = [...displayGrid()]
  newGrid[i] = [...newGrid[i]]
  newGrid[i][j] = value

  setDisplayGrid(newGrid)
}


export { grid, setGrid, displayGrid, setDisplayGrid }