import React, { Suspense } from 'react'
import CategoryTable from './CategoryTable'

function CategoryListSection() {
  return (
    <section className="container mx-auto py-3 flex flex-col gap-4">
      <h1 className='text-xl font-semibold mb-1'>Category</h1>
      <Suspense>
        <CategoryTable />
      </Suspense>
    </section>
  )
}

export default CategoryListSection
