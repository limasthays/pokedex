export const MainContainer = ({ children }) => {
  return (
    <div className="p-4 md:p-6 lg:p-[40px] flex flex-col gap-4 max-w-[1440px]">
      {children}
    </div>
  )
}
