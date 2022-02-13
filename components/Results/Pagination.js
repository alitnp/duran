import Pagination from "components/Global/Pagination/Pagination";
import { useRouter } from "next/router";
import routes from "utils/constants/routes";

const ResultsPagination = ({ info }) => {
  //hooks
  const router = useRouter();

  //functions
  const handlePageChange = (pagenumber) => {
    router.push({
      pathname: routes.result.pathname,
      query: { ...router.query, pagenumber },
    });
  };
  return (
    <Pagination
      totalPages={info?.TotalPages}
      pageIndex={info?.PageNumber}
      setPage={handlePageChange}
    />
  );
};

export default ResultsPagination;
