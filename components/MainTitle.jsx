import classNames from 'classnames'

export const MainTitle = ({ children, bold }) => {
  return (
    <h1
      className={classNames('text-neutral-black text-2xl', {
        'font-bold': bold,
      })}
    >
      {children}
    </h1>
  )
}
