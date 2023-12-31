import { useMemo, useEffect } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function Items({ itemType, getData, setSelectedItemId, setItemName, setIsItemSelected, uniqueKey, columnsHeaders }) {

  const dataQuery = useQuery({
    queryKey: [itemType+uniqueKey],
    queryFn: getData
  });
  
  const columns = useMemo(
    () => [
      {
        accessorKey: 'image_path',
        header: 'image',
        muiTableHeadCellProps: { sx: { color: 'steelblue' } },
        Cell: ({ row }) => <img src={row.original.image_path} height="80%" width="40%"/>
      }
    ].concat(
      columnsHeaders.map((headerKey) => {
        return ({
          accessorKey: headerKey,
          header: headerKey.replace('extra.',''),
          muiTableHeadCellProps: { sx: { color: 'steelblue' } }
        })})
    ),
    [],
  );

  const navigate = useNavigate();

  const table = useMaterialReactTable({
    columns,
    data: dataQuery.isSuccess ? dataQuery?.data : [],
    getRowId: (row) => row.userId,
    muiTableBodyRowProps: ({ row }) => ({      
      onClick: () => {
        setSelectedItemId(row?.original?.id|| row?.original?.player_id);
        setIsItemSelected(true);
        setItemName(row?.original?.name || row?.original?.display_name)
        navigate(`/${itemType}/${row?.original?.id || row?.original?.player_id}`);
      },
      sx: {
        cursor: 'pointer',
      },
    }),
    initialState: { pagination: { pageSize: 4, pageIndex: 0} },
    muiPaginationProps: {
        showRowsPerPage: false,
        shape: 'rounded',
      },
    paginationDisplayMode: 'pages',
  });

  useEffect(() => {
      setIsItemSelected(false);
  }, []);

  return  dataQuery.isSuccess  && ( 
     <MaterialReactTable  table={table}  />  
  );

}