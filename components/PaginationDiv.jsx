import { PageButtons } from './PageButtons'
import { SelectPagination } from './SelectPagination'

export const PaginationDiv = () => {
  return (
    <div className="flex justify-between">
      <SelectPagination />
      <PageButtons />
    </div>
  )
}
