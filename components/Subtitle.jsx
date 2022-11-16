import classNames from 'classnames'

export const Subtitle = ({ children, bold }) => {
  return (
    <span
      className={classNames('text-subtitle text-center text-neutral-black', {
        'font-bold': bold,
      })}
    >
      {children}
    </span>
  )
}
