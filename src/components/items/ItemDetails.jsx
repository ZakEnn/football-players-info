import { useContext } from "react";
import { FootballContext } from "../../context/FootballContext";
import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { getPlayersByCountry } from "../../services/apiPlayers";
import { useQuery } from "@tanstack/react-query";


function ItemDetails({ itemType, getData, selectedItemId, setItemName, setIsItemSelected, uniqueKey, columnsHeaders }){
    var dataItemQuery = useQuery({
        queryKey: [itemType+selectedItemId],
        queryFn: getData,
      });
        
    const itemQuery = Object.entries(dataItemQuery.isSuccess ? dataItemQuery.data: {})
        .filter(([key]) => columnsHeaders.includes(key))
        .map(([key, value]) => {
            if (key === 'image_path') {
              return { key: 'photo', value: <img src={value}/> };
            } else {
              return { key, value };
            }
        }).sort((a, b) => columnsHeaders.indexOf(a.key) - columnsHeaders.indexOf(b.key));
        ;

    const columns = useMemo(
      () => [
        {
          accessorKey: 'key',
          header: 'Key',
          muiTableHeadCellProps: { sx: { color: 'steelblue' } }
        },
        {
          accessorKey: 'value',
          header: 'Value',
          muiTableHeadCellProps: { sx: { color: 'steelblue' } }
        }
      ], [],
    );

    const table = useMaterialReactTable({
      columns,
      data: dataItemQuery.isSuccess ? itemQuery: {},
      getRowId: (row) => row.key,
      enablePagination: false,
      enableBottomToolbar: false
    });

    return dataItemQuery.isSuccess  && (
        <MaterialReactTable  table={table} />  
    );
} 


export default ItemDetails;