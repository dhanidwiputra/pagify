
# Pagify - A Friendly Pagination Library

Pagify is a lightweight and easy-to-use pagination library for React that helps you manage and display paginated data with ease. Whether you're working with large datasets or just need a simple way to navigate between pages, Pagify provides a flexible solution to make pagination hassle-free.





## Key Features

- **Simple Setup**: Easily integrate pagination into your React project with minimal configuration.
- **Automatic Pagination State**: Automatically manages the current page and handles page changes using hooks.
- **Flexible Pagination Options**: Control the number of items per page and the number of pages to display at once.
- **Customizable Navigation**: Easily navigate to the next or previous page, or jump directly to any page.
- **Supports Dynamic Data**: Ideal for paginating large datasets while keeping everything in sync with your UI.


## Installation

To install Pagify in your project, run the following command:

```bash
  npm install @dhanidwiputra/pagify
```

Or, if you're using Yarn:

```bash
  yarn add @dhanidwiputra/pagify
```
    
## Usage/Examples

```javascript
import { usePagination } from '@dhanidwiputra/pagify';

const MyComponent = () => {
  const { pagination, handlers } = usePagination(10, 5);

  return (
    <div>
      <ul>
        {pagination.pages.map(page => (
          <li key={page} onClick={() => handlers.goToPage(page)}>
            {page}
          </li>
        ))}
      </ul>
      <button onClick={handlers.prevPage} disabled={!pagination.hasPrevPage()}>
        Previous
      </button>
      <button onClick={handlers.nextPage} disabled={!pagination.hasNextPage()}>
        Next
      </button>
    </div>
  );
};

```


## Function

`usePagination`

```javascript
usePagination(pageSize = 10, maxPages = 5)
```

**Parameter**

`pageSize`: Number of items per page.

`maxPages`: Maximum number of visible pages in the pagination.

**Returns**: An object containing the current pagination (**pagination**) metadata and (**handlers**) to manage page changes.

`pagination`:

```javascript

  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];

```

`handlers`:

```javascript

  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
  setTotalItems: (total: number) => void;
  hasNextPage: () => boolean;
  hasPrevPage: () => boolean;

```

