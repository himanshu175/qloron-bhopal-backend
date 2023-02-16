import "./productListing.css";
import config from "../../config";
import { useEffect, useState } from "react";
import PaginatedListing from "../../components/paginatedListing/PaginatedListing";

export default () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentActivePage, setCurrentActivePage] = useState(1);

  const getSkipValueFn = () => {
    return currentActivePage * config.app_pagination_listing_perPage_count >
      total
      ? total - config.app_pagination_listing_perPage_count
      : currentActivePage * config.app_pagination_listing_perPage_count;
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${config.api_endpoint.server}${
          config.api_endpoint.get.posts
        }?skip=${getSkipValueFn()}&limit=${
          config.app_pagination_listing_perPage_count
        }`
      );
      const result = await res.json();
      setData(result.posts);
      setTotal(result.total);
    })();
  }, [currentActivePage]);

  return (
    Array.isArray(data) &&
    data.length > 0 && (
      <PaginatedListing
        data={data}
        currentActivePage={currentActivePage}
        total={total}
        setCurrentActivePage={setCurrentActivePage}
        perPage={config.app_pagination_listing_perPage_count}
      />
    )
  );
};
