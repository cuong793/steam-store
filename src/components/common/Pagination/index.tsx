import React from 'react';
import {
  Pagination as PaginationProvider,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

function Pagination() {
  return (
    <PaginationProvider>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' unselectable='on' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' size={'icon'}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </PaginationProvider>
  );
}

export default Pagination;
