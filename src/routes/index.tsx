import { Title } from 'solid-start'
import { CellState } from '~/components/Cell/Cell'
import { CellGrid } from '~/components/CellGrid/CellGrid'

export default function Home() {
  let grid: CellState[][] = [
    ['S', '.', '.', '.'],
    ['.', '.', '#', '.'],
    ['.', '.', '#', '.'],
    ['.', '.', '#', 'G'],
  ]
  
  return (
    <main>
      <Title>AlgoViz</Title>
      <h1>AlgoViz</h1>

      <CellGrid grid={grid} />
    </main>
  );

}
