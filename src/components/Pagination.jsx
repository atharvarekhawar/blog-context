import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page,handlePageChange,totalPages} = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-2 py-2 fixed bg-white bottom-0'>
      <div className='flex justify-between w-11/12 max-w-[700px]'>

       <div className='flex gap-x-2'>
          { page > 1 &&
           (
             <button onClick={()=>handlePageChange(page-1)}
             className='rounded-md border-2 px-4 py-1'>
                 prev  
             </button>
           )
         }
         { page < totalPages &&
           (
             <button onClick={()=>handlePageChange(page+1)}
             className='rounded-md border-2 px-4 py-1'>
                  next  
               </button>
           )
         }
      </div>
      

       <p className='font-bold text-sm'>
        Page {page} of {totalPages} 
       </p>
      </div>
    </div>
  )
}

export default Pagination