export const Heading01 = ({ children, bold }) => {
  if (bold) {
    return <h1 className="font-bold text-neutral-black text-2xl">{children}</h1>
  } else {
    return <h1 className="text-neutral-black text-2xl">{children}</h1>
  }
}
