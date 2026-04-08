function ButtonLink({ href, children, variant = 'primary' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(131,166,255,0.55)]';

  const styles = {
    primary:
      'bg-[rgba(131,166,255,0.2)] text-zinc-100 border border-[rgba(131,166,255,0.35)] hover:bg-[rgba(131,166,255,0.28)]',
    secondary:
      'bg-[rgba(255,255,255,0.03)] text-zinc-200 border border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.08)]',
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

export default ButtonLink;
