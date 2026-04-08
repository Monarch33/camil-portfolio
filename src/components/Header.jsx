import Container from './Container';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Reading', href: '#learning' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container className="flex justify-center">
        <div className="inline-flex max-w-full items-center rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(9,10,13,0.72)] px-2 py-1 shadow-[0_1px_3px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <a
            href="#hero"
            className="hidden rounded-full px-3 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-zinc-100 sm:block"
          >
            CAMIL
          </a>
          <nav className="nav-x-scroll flex max-w-full items-center gap-0.5 overflow-x-auto px-0.5 sm:gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs tracking-wide text-zinc-400 transition-colors hover:bg-[rgba(255,255,255,0.06)] hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
