/* eslint-disable object-shorthand */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  purpose,
  rentFrequency,
  minPrice,
  maxPrice,
  sort,
  maxArea,
  rooms,
  baths,
  furnish,
  propertyType,
} from "../filterOptions";
import { FilterSection, StyledSelectFilter } from "../styles/styledPurpose";
import { getFilterValues } from "../filterData";

function SelectFilter({ content, param }) {
  const router = useRouter();

  const selectFilter = (filterObj) => {
    console.log("obj :", filterObj);
    console.log("router: ", router);
    const path = router.pathname;
    const { query } = router;
    console.log("router pathname: ", path);
    console.log("router query: ", query);

    const values = getFilterValues(filterObj);
    console.log(values);
    values.forEach((item) => {
      if (item.value && filterObj?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };
  return (
    <StyledSelectFilter
      onChange={(e) =>
        selectFilter({ [param]: e.target.value.toLocaleLowerCase() })
      }
    >
      {content.map((item, index) => (
        <option key={index} value={index === 0 ? "" : item}>
          {item}
        </option>
      ))}
    </StyledSelectFilter>
  );
}

export default function Filter() {
  const [isFilterShowing, setIsFilterShowing] = useState(false);
  return (
    <FilterSection>
      <button
        onClick={() => setIsFilterShowing(!isFilterShowing)}
        type="button"
      >
        Search Property By Filters
      </button>

      <div className={`filter-wrapper ${isFilterShowing && "show"}`}>
        <SelectFilter content={purpose} param="purpose" />
        <SelectFilter content={rentFrequency} param="rentFrequency" />
        <SelectFilter content={minPrice} param="minPrice" />
        <SelectFilter content={maxPrice} param="maxPrice" />
        <SelectFilter content={sort} param="sort" />
        <SelectFilter content={maxArea} param="maxArea" />
        <SelectFilter content={rooms} param="roomsMax" />
        <SelectFilter content={baths} param="bathsMax" />
        <SelectFilter content={furnish} param="furnishingStatus" />
        <SelectFilter content={propertyType} />
      </div>
    </FilterSection>
  );
}
