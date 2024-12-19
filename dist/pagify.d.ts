/**
 * Calculates pagination metadata.
 * @param {number} totalItems - Total number of items.
 * @param {number} currentPage - Current page number (1-based).
 * @param {number} pageSize - Number of items per page.
 * @param {number} maxPages - Maximum number of visible pages in the pagination.
 * @returns {Object} Pagination metadata.
 */
export declare function getPagination(totalItems: number, currentPage?: number, pageSize?: number, maxPages?: number): {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: number[];
};
/**
 * Retrieves paginated data from a full dataset.
 * @param {Array} data - Full dataset.
 * @param {number} currentPage - Current page number (1-based).
 * @param {number} pageSize - Number of items per page.
 * @returns {Array} Paginated data for the current page.
 */
export declare function paginate<T>(data: T[], currentPage?: number, pageSize?: number): T[];
/**
 * Helper function to handle page change.
 * @param {number} currentPage - Current page number.
 * @param {number} totalPages - Total number of pages.
 * @param {string} direction - Navigation direction ('next' or 'prev').
 * @returns {number} New current page number.
 */
export declare function changePage(currentPage: number, totalPages: number, direction: 'next' | 'prev'): number;
/**
 * Initializes the current page and ensures it is within valid bounds.
 * @param {number} totalItems - Total number of items.
 * @param {number} currentPage - Current page number (1-based).
 * @param {number} pageSize - Number of items per page.
 * @returns {number} Valid current page.
 */
export declare function initPage(currentPage?: number, pageSize?: number): number;
/**
 * Goes directly to a specific page number.
 * @param {number} page - The target page number.
 * @param {number} totalPages - Total number of pages.
 * @returns {number} The valid page number to go to.
 */
export declare function goTo(page: number, totalPages: number): number;
/**
 * Hook to manage pagination state automatically.
 * @param {number} pageSize - Number of items per page.
 * @param {number} maxPages - Maximum number of visible pages in the pagination.
 * @returns {Object} Pagination state and handlers.
 */
export declare function usePagination(pageSize?: number, maxPages?: number): {
    pagination: {
        totalItems: number;
        currentPage: number;
        pageSize: number;
        totalPages: number;
        startPage: number;
        endPage: number;
        startIndex: number;
        endIndex: number;
        pages: number[];
    };
    handlers: {
        nextPage: () => void;
        prevPage: () => void;
        goToPage: (page: number) => void;
        setTotalItems: (total: number) => void;
        hasNextPage: () => boolean;
        hasPrevPage: () => boolean;
    };
};
