import React, { useState } from "react";
import { IconButton, Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
export default function Pagination({postsPerPage, totalPosts, currentPage, paginate}) {
    //Set active page
  const [active, setActive] = useState(currentPage);

  const pageNumbers = []
  for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i)
  }

  //Buttons & Icons
  const getItemProps = (index) =>
    ({
      className: active === index ? "bg-black text-red-400 text-xl font-bold" : "text",
      variant: "text",
      color: "black",
      key: index,
      onClick: () => setActive(index),
    });
 
  const next = () => {
    if (active === pageNumbers.length){
      return
    }else{
      paginate(currentPage + 1)
      setActive(active + 1);
    }

  };
 
  const prev = () => {
    if (active === 1){
      return
    }else{
      paginate(currentPage - 1)
     setActive(active - 1);
    }
  };
 
  return (
          <div className="flex justify-between space-x-20 mx-40 m-auto">
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full text-cyan-500"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
            <div className="flex items-center space-x-10">
              {pageNumbers.map(page => {
                // <IconButton {...getItemProps(page)}>
                // </IconButton>
                return  <a key={page} onClick={() => paginate(page)} href="#page">{page}</a> 
              })}
            </div>
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full text-cyan-500"
            onClick={next}
            disabled={active === pageNumbers.length}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
  );
}