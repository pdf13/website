const links = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/pedrodiasfonseca' },
  { name: 'GitHub', href: 'https://github.com/pdf13' },
  { name: 'Instagram', href: 'https://instagram.com/pdf_' }
]

export const socialUrls = links.map(link => link.href)

const Social = ({ label }: { label: string }) => (
  <ul className='social' aria-label={label}>
    {links.map(link => (
      <li key={link.name}>
        <a href={link.href} target='_blank' rel='noopener noreferrer'>{link.name}</a>
      </li>
    ))}
  </ul>
)

export default Social
