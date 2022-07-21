exports.getOffset = (pageIndex, pageSize, defaultPageSize = 10) => {
  let offset = 0;
  const limit = pageSize ? pageSize : defaultPageSize;
  if (pageIndex) {
    offset = parseInt(pageIndex, 10) * parseInt(limit, 10);
  }
  return offset;
};

exports.getLimit = (pageSize, defaultPageSize = 10) => {
  let limit = defaultPageSize;
  if (pageSize) {
    limit = parseInt(pageSize, 10);
  }
  return limit;
};

exports.getOrder = (sortBy) => {
  let order = null;
  if (sortBy) {
    const sortByItems = sortBy.split(",");

    order = sortByItems.reduce((prev, current) => {
      const currentItems = current.split(":");
      return [...prev, currentItems];
    }, []);
  }
  return order;
};

exports.getCurrentPageIndex = (offset, pageSize) => {
  let currentPageIndex = 0;
  if (offset && pageSize) {
    currentPageIndex = Math.floor(offset / pageSize);
  }
  return currentPageIndex;
};

exports.getPageCount = (totalCount, pageSize) => {
  let pageCount = 0;
  if (totalCount && pageSize) {
    pageCount = Math.ceil(totalCount / pageSize);
  }
  return pageCount;
};
