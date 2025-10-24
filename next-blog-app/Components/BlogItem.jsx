import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Link from 'next/link'

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div
      className="ml-4 max-w-[330px] sm:max-w-[300px] bg-white border border-black
                 hover:shadow-[-7px_7px_0px_#000000] transition-all duration-300
                 hover:-translate-y-2 cursor-pointer rounded-xl overflow-hidden"
    >
      <Link href={`/blogs/${id}`}>
        <div className="relative w-full h-[220px] overflow-hidden border-b border-black">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>

      <p className="ml-5 mt-5 px-2 py-1 inline-block bg-black text-white text-xs rounded-sm tracking-wide uppercase">
        {category}
      </p>

      <div className="p-5">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 line-clamp-2">
          {title}
        </h5>

        <p
          className="mb-3 text-sm text-gray-700 leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>

        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 font-semibold text-sm text-gray-800 hover:text-black transition-colors duration-200"
        >
          Read More
          <Image
            src={assets.arrow}
            alt="arrow"
            className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
            width={12}
            height={12}
          />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
