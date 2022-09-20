/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

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
import { fetchDataWithFilter } from "./API/fetchWithFilter";

function SelectFilter({ content, param, setHouseContentFiltered }) {
  const [paramsToFilter, setParamsToFilter] = useState({});
  React.useEffect(() => {
    async function activateFilter() {
      const response = await fetchDataWithFilter(paramsToFilter);
      console.log(response);
      console.log(paramsToFilter);
    }
    if (paramsToFilter) {
      activateFilter();
    }
  }, [paramsToFilter]);

  const selectFilter = (e) => {
    setParamsToFilter((prev) => {
      prev[param] += e.target.value.toLowerCase();
    });
  };
  return (
    <StyledSelectFilter onChange={(e) => selectFilter(e)}>
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
