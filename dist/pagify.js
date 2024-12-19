"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = exports.goTo = exports.initPage = exports.changePage = exports.paginate = exports.getPagination = void 0;
const react_1 = require("react");
/**
 * Calculates pagination metadata.
 * @param {number} totalItems - Total number of items.
 * @param {number} currentPage - Current page number (1-based).
 * @param {number} pageSize - Number of items per page.
 * @param {number} maxPages - Maximum number of visible pages in the pagination.
 * @returns {Object} Pagination metadata.
 */
function getPagination(totalItems, currentPage = 1, pageSize = 10, maxPages = 5) {
    const totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1)
        currentPage = 1;
    if (currentPage > totalPages)
        currentPage = totalPages;
    const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    const endPage = Math.min(totalPages, startPage + maxPages - 1);
    return {
        totalItems,
        currentPage,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex: (currentPage - 1) * pageSize,
        endIndex: Math.min(currentPage * pageSize - 1, totalItems - 1),
        pages: Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i),
    };
}
exports.getPagination = getPagination;
/**
 * Retrieves paginated data from a full dataset.
 * @param {Array} data - Full dataset.
 * @param {number} currentPage - Current page number (1-based).
 * @param {number} pageSize - Number of items per page.
 * @returns {Array} Paginated data for the current page.
 */
function paginate(data, currentPage = 1, pageSize = 10) {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);
    return data.slice(startIndex, endIndex);
}
exports.paginate = paginate;
/**
 * Helper function to handle page change.
 * @param {number} currentPage - Current page number.
 * @param {number} totalPages - Total number of pages.
 * @param {string} direction - Navigation direction ('next' or 'prev').
 * @returns {number} New current page number.
 */
function changePage(currentPage, totalPages, direction) {
    if (direction === 'next') {
        return Math.min(currentPage + 1, totalPages);
    }
    else if (direction === 'prev') {
        return Math.max(currentPage - 1, 1);
    }
    return currentPage;
}
exports.changePage = changePage;
/**
 * Initializes the current page and ensures it is within valid bounds.
 * @param {number} totalItems - Total number of items.
 * @param {number} currentPage - Current page number (1-based).
 * @param {number} pageSize - Number of items per page.
 * @returns {number} Valid current page.
 */
function initPage(currentPage = 1, pageSize = 10) {
    if (currentPage < 1)
        return 1;
    return currentPage;
}
exports.initPage = initPage;
/**
 * Goes directly to a specific page number.
 * @param {number} page - The target page number.
 * @param {number} totalPages - Total number of pages.
 * @returns {number} The valid page number to go to.
 */
function goTo(page, totalPages) {
    if (page < 1)
        return 1;
    if (page > totalPages)
        return totalPages;
    return page;
}
exports.goTo = goTo;
/**
 * Hook to manage pagination state automatically.
 * @param {number} pageSize - Number of items per page.
 * @param {number} maxPages - Maximum number of visible pages in the pagination.
 * @returns {Object} Pagination state and handlers.
 */
function usePagination(pageSize = 10, maxPages = 5) {
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const [totalItemCount, setTotalItemCount] = (0, react_1.useState)(0);
    const pagination = getPagination(totalItemCount, currentPage, pageSize, maxPages);
    const handlers = {
        nextPage: () => setCurrentPage(changePage(currentPage, pagination.totalPages, 'next')),
        prevPage: () => setCurrentPage(changePage(currentPage, pagination.totalPages, 'prev')),
        goToPage: (page) => setCurrentPage(goTo(page, pagination.totalPages)),
        setTotalItems: (total) => setTotalItemCount(total),
        hasNextPage: () => currentPage < pagination.totalPages,
        hasPrevPage: () => currentPage > 1,
    };
    return { pagination, handlers };
}
exports.usePagination = usePagination;
