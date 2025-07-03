'use client'
import { useParams } from 'next/navigation'
import { blog_data } from '@/Assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { assets } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';

const Page = () => {
  const params = useParams(); // ✅ useParams returns { id: '...' }
  const [data, setData] = useState(false);


const fetchBlogData = async () => {
  try {
    const response = await axios.get('/api/blog', {
      params: { id: params.id }
    });
    setData(response.data);
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
}

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    data ? (
      <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <Image src={assets.logo} width={180} alt='Logo' className='w-[130px] sm:w-auto' />
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
              Get Started <Image src={assets.arrow} alt='Arrow' />
            </button>
          </div>

          <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='Author' />
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
          </div>
        </div>

        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
          <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='Main' />
          <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
          <p>{data.description}</p>

          <h3 className='my-5 text-[18px]font-semibold'> step1 - sdaccccccccccccccccccccccccccccccccccccccccccccaaadddddddddddddddddddddddddddd</h3>
        <p className='my-3'>qwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeee fdsssssssssssssssssssssssssssssssssssssssssssssssssss bggggfrthqwretrytuyiuoopiuytre mnbvfdrtyuh</p>
         <p className='my-3'>qwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeee fdsssssssssssssssssssssssssssssssssssssssssssssssssss bggggfrthqwretrytuyiuoopiuytre mnbvfdrtyuh</p>
         <h3 className='my-5 text-[18px]font-semibold'> step1 - sdaccccccccccccccccccccccccccccccccccccccccccccaaadddddddddddddddddddddddddddd</h3>
        <p className='my-3'>qwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeee fdsssssssssssssssssssssssssssssssssssssssssssssssssss bggggfrthqwretrytuyiuoopiuytre mnbvfdrtyuh</p>
         <p className='my-3'>qwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeee fdsssssssssssssssssssssssssssssssssssssssssssssssssss bggggfrthqwretrytuyiuoopiuytre mnbvfdrtyuh</p>
         <h3 className='my-5 text-[18px]font-semibold'> step1 - sdaccccccccccccccccccccccccccccccccccccccccccccaaadddddddddddddddddddddddddddd</h3>
        <p className='my-3'>qwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeee fdsssssssssssssssssssssssssssssssssssssssssssssssssss bggggfrthqwretrytuyiuoopiuytre mnbvfdrtyuh</p>
         <p className='my-3'>qwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeee fdsssssssssssssssssssssssssssssssssssssssssssssssssss bggggfrthqwretrytuyiuoopiuytre mnbvfdrtyuh</p>
         <h3 className='my-5 text-[18px]font-semibold'> Conclusion</h3>
        <p className='my-3'>qwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeee fdsssssssssssssssss sdfffffffffffffffffffffffffffffffffff ssssssssssssssssssssssssssssssssss bggggfrthqwretrytuyiuoopiuytre mnbvfdrtyuh</p>

          <div className='my-24'>
            <p className='text-black font-semibold my-4'>Share this article on social media</p>
            <div className='flex gap-4'>
              <Image src={assets.facebook_icon} width={50} alt='Facebook' />
              <Image src={assets.twitter_icon} width={50} alt='Twitter' />
              <Image src={assets.googleplus_icon} width={50} alt='Google+' />
            </div>
          </div>
        </div>

        <Footer />
      </>
    ) : null
  );
};

export default Page;
