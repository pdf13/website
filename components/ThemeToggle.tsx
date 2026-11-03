'use client'

type Props = { toDark: string, toLight: string }

const ThemeToggle = ({ toDark, toLight }: Props) => {
  const toggle = () => {
    const next = document.documentElement.dataset.mode === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.mode = next
    try {
      localStorage.setItem('mode', next)
    } catch {}
  }

  return (
    <button type='button' className='text-button theme-toggle' onClick={toggle}>
      <span className='when-light'>{toDark}</span>
      <span className='when-dark'>{toLight}</span>
    </button>
  )
}

export default ThemeToggle
