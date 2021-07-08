import React from "react"
import MaterialTable from "material-table"

export const Table=()=>{
    const data=[
        {Indicator:'P/E',value:20},
        {Indicator:'P/E',value:20},
        {Indicator:'P/E',value:20}

    ]

    const columns=[{

        title:'Indicator',field:'a'
    },
    {
        title:'Value',field:'b'
    }


    ]
}






    return (
        <div>
            
            <MaterialTable
            data={data}
            columns={columns}
            />
            
           
            
        </div>
    )
