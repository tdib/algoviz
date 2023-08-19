import styles from './Cell.module.scss'

export type CellState = 'S' | 'G' | '.' | '#' | 'x'

export interface CellProps {
  state: CellState
}

export function Cell({ state }: CellProps ) {
  return (
    <div data-state={state} class={styles.cell}>
    </div>
  )
}