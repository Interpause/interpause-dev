import 'twin.macro'
import { useToaster } from '../components/Toast'
/**
 * placed below 1 para self-description
 * 2011 - timeline - 2020
 * title are visible, on hover or click, they expand to show details & link to elab/repo/etc (like a card)
 * somehow rotate timeline based on mobile...
 */
export function Milestone() {
  const toast = useToaster()
  return (
    <section id='timeline' tw='w-full h-64 text-center bg-special'>
      <p>Milestone component</p>
      <p>TODO: make this component</p>
      <label>
        2013
        <input
          type='range'
          onChange={() =>
            toast('stop touching me', { duration: 200, type: 'bad' })
          }
        />
        2021
      </label>
    </section>
  )
}
