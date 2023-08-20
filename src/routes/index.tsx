import { createSignal } from 'solid-js'
import { Title } from 'solid-start'
import { CellState } from '~/components/Cell/Cell'
import { CellGrid } from '~/components/CellGrid/CellGrid'

export default function Home() {
  return (
    <main>
      <Title>AlgoViz</Title>
      <h1>AlgoViz</h1>

      <CellGrid />
    </main>
  );

}
