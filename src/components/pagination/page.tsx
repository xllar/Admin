import { Pagination, Box } from '@mui/material';

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationComponentProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        color="primary"
        shape="rounded"
        sx={{
          '& .Mui-selected': {
            backgroundColor: 'purple-600',
            color: '#e0e0e0',
          },
          '& .MuiPaginationItem-root': {
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: '#162447',
              color: '#e0e0e0',
            },
          },
        }}
      />
    </Box>
  );
};


