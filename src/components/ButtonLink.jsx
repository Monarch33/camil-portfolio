function ButtonLink({ href, children, variant = 'primary' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300';

  const styles = {
    primary: 'bg-zinc-900 text-zinc-100 hover:bg-zinc-800',
    secondary: 'border border-zinc-300 bg-zinc-100/70 text-zinc-900 hover:bg-zinc-200',
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

export default ButtonLink;
