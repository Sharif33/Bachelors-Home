import * as React from "react";
import { HOUSES, IHouses } from "../faker/fake-post";
import { DISTRICTS, DIVISIONS } from "./filter-elements";
import { UPAZILLAS } from "./upazillas";

export const UseFilters = () => {
  const initialRangeValues = [1000, 30000];

  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const [filteredHouses, setFilteredHouses] = React.useState<IHouses[]>(HOUSES);

  const handleCheckboxChange = (label: string, checked: boolean) => {
    if (checked) {
      setSelectedItems((prevSelected) => [...prevSelected, label]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => item !== label)
      );
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentMonthName = months[currentMonth];

  const [divId, setDivId] = React.useState<string>(DIVISIONS[0].id);
  const districts = DISTRICTS.filter((item) => item.division_id === divId);
  const [distId, setDistId] = React.useState<string>(districts[0].id);
  const upazillas = UPAZILLAS.filter((item) => item.district_id === distId);

  React.useEffect(() => {
    if (selectedItems.length > 0) {
      const filteredHouse = HOUSES.filter((house) =>
        selectedItems.includes(house.preferredGender)
      );
      console.log(filteredHouse);
      setFilteredHouses(filteredHouse);
    } else {
      setFilteredHouses(HOUSES);
    }
  }, [selectedItems]);

  return {
    handleCheckboxChange,
    selectedItems,
    initialRangeValues,
    currentMonthName,
    divId,
    setDivId,
    districts,
    distId,
    setDistId,
    upazillas,
    months,
    currentDate,
    currentMonth,
    filteredHouses,
  };
};
