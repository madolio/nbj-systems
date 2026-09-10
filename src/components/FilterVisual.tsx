export default function FilterVisual() {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
      <div className="absolute inset-0 rounded-full bg-accent/10" />
      <div className="absolute inset-6 rounded-full bg-accent/15" />
      <div className="absolute inset-12 rounded-full bg-accent/25" />
      <div className="absolute inset-20 rounded-full bg-accent" />
      <svg viewBox="0 0 24 24" className="relative z-10 h-14 w-14">
        <path
          d="M12 2.5c3 4 6 7.5 6 11a6 6 0 1 1-12 0c0-3.5 3-7 6-11Z"
          fill="white"
        />
      </svg>
    </div>
  )
}
