export const Subtitle01 = ({ children, bold }) => {
  if (bold) {
    return (
      <span className="font-bold text-center text-subtitle text-neutral-black">
        {children}
      </span>
    )
  } else {
    return (
      <span className="text-subtitle text-center text-neutral-black">
        {children}
      </span>
    )
  }
}
