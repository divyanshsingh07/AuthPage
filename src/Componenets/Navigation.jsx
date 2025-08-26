import React from "react";

function Navigation({ page, totalPages, goHome, goPrev, goNext }) {
  return (
    <div className="flex items-center justify-center gap-6 pt-4  w-[370px]">
      <button onClick={goHome} className="text-gray-500 hover:text-gray-700 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75A.75.75 0 013 21V9.75z" />
        </svg>
      </button>

      <button
        onClick={goPrev}
        className="text-gray-500 hover:text-gray-700 disabled:opacity-40 cursor-pointer"
        disabled={page === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <span className="text-sm text-gray-600">
        {page} of {totalPages}
      </span>

      <button
        onClick={goNext}
        className="text-gray-500 hover:text-gray-700 disabled:opacity-40 cursor-pointer"
        disabled={page === totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Navigation;
