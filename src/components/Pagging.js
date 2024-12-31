import React from 'react'

const Pagging = ({page,setPage,posts,limit}) => {
  return (
    <div>
        <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className={`px-4 py-2 bg-gray-300 text-gray-700 rounded ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700 ">Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={posts < limit}
          className={`px-4 py-2 bg-gray-300 text-gray-700 rounded ${
            posts < limit
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
        >
          Next
        </button>
      </div>
      
    </div>
  )
}

export default Pagging
