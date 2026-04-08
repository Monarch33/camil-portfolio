function ImagePlaceholder({ label = 'Photo Placeholder', ratio = 'aspect-[4/3]', className = '' }) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)] ${ratio} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(131,166,255,0.22),transparent_65%)]" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <span className="rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(17,19,26,0.6)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
          Visual
        </span>
        <p className="mt-3 px-5 text-xs text-zinc-400">{label}</p>
      </div>
    </div>
  );
}

export default ImagePlaceholder;
