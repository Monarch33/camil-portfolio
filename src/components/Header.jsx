import Container from './Container';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-300/60 bg-zinc-100/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#hero" className="font-display text-sm tracking-[0.2em] text-zinc-800">
          CAMIL TERAOUI
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.16em] text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
