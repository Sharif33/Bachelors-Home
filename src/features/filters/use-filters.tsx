import * as React from "react";
import { useAvailableHousesQuery } from "../../redux/store/base-api";
import { HOUSES, IHouses } from "../faker/fake-post";
import { DISTRICTS, DIVISIONS } from "./filter-elements";
import { UPAZILLAS } from "./upazillas";

export const UseFilters = () => {
  const { data } = useAvailableHousesQuery(`?location.district=Comilla`);

  console.log(data);

  const initialRangeValues = [1000, 30000];

  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const [selectedGender, setSelectedGender] = React.useState<string[]>([]);

  const [filteredHouses, setFilteredHouses] = React.useState<IHouses[]>(HOUSES);

  const handleHouseTypeChange = (label: string, checked: boolean) => {
    if (checked) {
      setSelectedItems((prevSelected) => [...prevSelected, label]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => item !== label)
      );
    }
  };

  const handleGenderChange = (label: string, checked: boolean) => {
    if (checked) {
      setSelectedGender((prevSelected) => [...prevSelected, label]);
    } else {
      setSelectedGender((prevSelected) =>
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
  const [month, setMonth] = React.useState(currentMonthName);

  const [divId, setDivId] = React.useState<string>(DIVISIONS[0].id);
  const districts = DISTRICTS.filter((item) => item.division_id === divId);
  const [distId, setDistId] = React.useState<string>(districts[0].id);
  const upazillas = UPAZILLAS.filter((item) => item.district_id === distId);

  React.useEffect(() => {
    if (selectedGender.length > 0) {
      const filtereHouse = HOUSES.filter((house) =>
        selectedGender.includes(house.preferredGender)
      );
      setFilteredHouses(filtereHouse);
    } else {
      setFilteredHouses(HOUSES);
    }
  }, [selectedGender]);

  return {
    handleHouseTypeChange,
    handleGenderChange,
    selectedItems,
    initialRangeValues,
    currentMonthName,
    month,
    setMonth,
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
