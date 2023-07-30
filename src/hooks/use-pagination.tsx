import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 10;

export function usePagination<T>(data: T[]) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
    const itemsToShow = data.slice(startIndex, endIndex);

    // Simulate an asynchronous data update
    setTimeout(() => {
      setPaginatedData(itemsToShow);
      setLoading(false);
    }, 200);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, page, totalItems]);

  return { page, totalPages, handleChange, paginatedData, loading };
}
