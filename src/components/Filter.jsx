import React, { useState } from 'react';

function Filter({ onFilterChange }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [company, setCompany] = useState('');
  const [sort, setSort] = useState('');
  const [price, setPrice] = useState(0);

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleCompanyChange(event) {
    setCompany(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleSearch() {
    onFilterChange({ search, category, company, sort, price });
  }

  function handleReset() {
    setSearch('');
    setCategory('all');
    setCompany('');
    setSort('');
    setPrice(0);
    onFilterChange({ search: '', category: 'all', company: '', sort: '', price: 0 });
  };

  return (
    <div className="w-[1090px] h-[240px] bg-[#F0F6FF] p-8 rounded-lg mx-auto my-20">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex gap-5">
          <span>
            <p className="text-sm text-gray-600 font-normal mb-2">Search Product</p>
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              className="w-[250px] p-2 rounded-lg border-none outline-[#b9d5ff]"
            />
          </span>

          <span>
            <p className="text-sm text-gray-600 font-normal mb-2">Select Category</p>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-[240px] p-2 rounded-lg border-none outline-[#afcdfa]"
            >
              <option value="all">all</option>
              <option value="Tables">Tables</option>
              <option value="Chairs">Chairs</option>
              <option value="Kids">Kids</option>
              <option value="Sofas">Sofas</option>
              <option value="Beds">Beds</option>
            </select>
          </span>

          <span>
            <p className="text-sm text-gray-600 font-normal mb-2">Select Company</p>
            <select
              value={company}
              onChange={handleCompanyChange}
              className="w-[240px] p-2 rounded-lg border-none outline-[#afcdfa]"
            >
              <option value="">all</option>
              <option value="Modenza">Modenza</option>
              <option value="Luxora">Luxora</option>
              <option value="Artifex">Artifex</option>
              <option value="Comfora">Comfora</option>
              <option value="Homestead">Homestead</option>
            </select>
          </span>

          <span>
            <p className="text-sm text-gray-600 font-normal mb-2">Sort By</p>
            <select
              value={sort}
              onChange={handleSortChange}
              className="w-[240px] p-2 rounded-lg border-none outline-[#afcdfa]"
            >
              <option value="az">a-z</option>
              <option value="za">z-a</option>
              <option value="high">high</option>
              <option value="low">low</option>
            </select>
          </span>
        </div>
        <div className="mt-2">
          <div className="flex flex-col gap-2 p-2 rounded-lg">
            <p className=" text-[15px] font-normal">Select Price</p>
            <span className="ml-[165px] font-normal text-sm">${price}.00</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={price}
              className="w-[220px] h-5 bg-[#007bff] rounded-full cursor-pointer opacity-90"
              onChange={handlePriceChange}
            />
            <div className="flex text-xs text-gray-500">
              <span>0</span>
              <span className="ml-[125px] mt-2">Max : $1,000.00</span>
            </div>
          </div>
          <div className="flex items-center gap-5 relative top-[-65px] left-[330px]">
            <label className="flex items-center gap-2">
              Free Shipping
              <input
                type="checkbox"
                className="ml-[-60px] mb-[-50px] w-[18px] h-[18px]"
              />
            </label>
            <button
              onClick={handleSearch}
              className="w-[250px] ml-24 bg-[#007bff] text-gray-200 font-bold py-2 rounded-lg"
            >
              SEARCH
            </button>
            <button
              onClick={handleReset}
              className="w-[250px] bg-[#d63384] text-gray-200 font-bold py-2 rounded-lg"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;