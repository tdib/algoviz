import { createSignal } from 'solid-js'
import { CellState } from '~/components/Cell/Cell'

const [grid, setGrid] = createSignal<CellState[][]>([
  ['S', '.', '.', '.', '.', '.'],
  ['.', '#', '.', '#', '.', '#'],
  ['.', '#', '.', '#', '.', '.'],
  ['.', '.', '#', '#', '.', '.'],
  ['#', '#', '#', 'G', '#', '.'],
  ['.', '.', '#', '.', '.', '.'],
])

export function updateGridValue(i: any, j: any, value: any) {
  const newGrid = [...grid()]
  newGrid[i] = [...newGrid[i]]
  newGrid[i][j] = value

  setGrid(newGrid)
}


export { grid, setGrid }