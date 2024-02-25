import React from 'react'
import { Product } from '@/types' 
import ProductCard from './productCard'

interface ProductListProps{
    items: Product[]
}

const productsList :React.FC<ProductListProps> = ({items})=> {
  return (
    <div className='space-y-4 '>
        <div className='grid gird-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {items.map((item,i)=>{
                return <ProductCard key={i} data={item}/>
            })}
        </div>
    </div>
  )
}

export default productsList