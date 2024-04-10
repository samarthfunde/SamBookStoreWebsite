import React from "react";


function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-83 shadow-xl hover:scale-110 transition-transform duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt={item.name}
              width={item.width}
              height={item.height}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary cursor-pointer">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between cursor-pointer">
              <div className="badge-outline badge badge-secondary cursor-pointer">
                ${item.price}
              </div>
              <div className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
