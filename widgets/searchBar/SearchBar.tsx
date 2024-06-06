"use client";
import React from "react";

import { InstantSearch, SearchBox } from "react-instantsearch";

import algoliasearch from "algoliasearch";

import "./SearchBar.css";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76",
);

const SearchBar = () => {
  return (
    <div className="relative mt-[30px] mlarge:mt-[20px] mb-[50px] mlarge:mb-[30px] w-[60%] mlarge:w-full h-auto min-h-[50px] mlarge:min-h-[40px] mmedium:min-h-[35px] bg-[#01212f] border-2 border-[--theme-color] rounded-[7.5px]">
      <InstantSearch
        searchClient={searchClient}
        indexName="instant_search"
        routing={true}
        insights={true}
      >
        <SearchBox
          placeholder="Поиск"
          autoFocus={true}
          submitIconComponent={() => (
            <img
              src="/static/GeneralIcons/SearchIcon.svg"
              alt=""
              className="mr-[30px] w-[30px] h-[30px]"
            />
          )}
          resetIconComponent={() => (
            <img
              src="/static/GeneralIcons/CloseIcon.svg"
              alt=""
              className="ml-[-5px] mr-[30px] w-[30px] h-[30px]"
            />
          )}
        />
      </InstantSearch>
    </div>
  );
};

export default SearchBar;
