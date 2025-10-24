'use client'
import { blog_data } from '@/Assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { assets } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import { useParams } from 'next/navigation'
import axios from 'axios';
import Link from 'next/link';


const page = () => {
    const params = useParams(); // ✅ Get URL params
    const [ data,setData ] = useState(null);

    const fetchBlogData = async () =>{
       const response = await axios.get('/api/blog',{
        params:{
            id:params.id
        }
       })
       setData(response.data.blog);
    }
    useEffect(()=>{
        fetchBlogData();
    },[])
  return ( data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href='/'>
             <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            </Link>
           

        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt=''/>
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className="mx-5 max-w-[700px] md:mx-auto mt-[-100px] mb-10">
  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-lg border-4 border-white">
    <Image
      src={data.image}
      alt={data.title}
      fill
      className="object-cover object-center"
      priority
    />
  </div>

  <div
    className="blog-content mt-8 text-gray-800 leading-relaxed"
    dangerouslySetInnerHTML={{ __html: data.description }}
  ></div>

 
</div>

    <Footer />
    </>:<></>
  )
}

export default page