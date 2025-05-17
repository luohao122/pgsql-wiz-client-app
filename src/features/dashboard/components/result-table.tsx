import {
  useMemo,
  useState,
  type FC,
  type ReactElement,
} from "react";

import Pagination from "../../../shared/components/pagination";
import DataTable from "./table";

interface IResultTable {
  isLoading: boolean;
  tableResult: Record<string, unknown>[];
}

const ITEMS_PER_PAGE = 20;

const ResultTable: FC<IResultTable> = ({
  tableResult,
  isLoading,
}): ReactElement => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalItems   = tableResult.length;
  const totalPages   = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

  const startIndex   = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex     = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  const currentPageData = useMemo(
    () => tableResult.slice(startIndex, endIndex),
    [tableResult, startIndex, endIndex]
  );

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col relative">
      <div className="bg-gray-100 border-gray-200 border-b py-2 flex justify-between items-center">
        <h3 className="font-semibold px-4 w-full">Query Results</h3>

        {totalItems > 0 && (
          <div className="flex items-end">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPaginationData={handlePageChange}
            />
          </div>
        )}
      </div>

      <DataTable data={currentPageData} />

      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg">
          <div
            className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-r-transparent"
            role="status"
            aria-label="Loading"
          />
        </div>
      )}
    </div>
  );
};

export default ResultTable;
