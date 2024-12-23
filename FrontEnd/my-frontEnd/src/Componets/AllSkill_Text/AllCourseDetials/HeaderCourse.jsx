import React, { useContext } from 'react'
import PriceMoney from './PriceMoney'
import { Context } from '../../../../Contex';
import { useParams } from 'react-router-dom';

const HeaderCourse = () => {
  const { Courses} = useContext(Context);
  let {id} = useParams();
  console.log(id);

  let filterData = Courses.find((data ,index)=>{
  return index==id;
  })
  
  
  return (
    <div className="bg-gray-900 text-white p-6 relative">
            <div className="pr-48">
                <h1 className="text-3xl font-bold">{filterData?.description}</h1>
                <p className="mt-2 text-yellow-400">4.5 ⭐ (41,828 ratings) | 237,093 students</p>
                <p className="mt-2">Created by language  <span className='font-bold text-red-500'>{filterData?.language}</span> , The lavel is <span className='font-bold text-red-500'>{filterData?.level}</span></p>
                <p className="mt-2">Create data: - {new Date(filterData?.createdAt).toLocaleDateString()}</p>
                <p className="mt-2">Update data: - {new Date(filterData?.updatedAt).toLocaleDateString()}</p>
            </div>
            <div className="fixed top-6 right-6">
                <PriceMoney />
            </div>
        </div>
  )
}

export default HeaderCourse