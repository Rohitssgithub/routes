// import React from 'react'
// import DataTable from 'react-data-table-component';
// import ReactPaginate from 'react-paginate';
// import Pagination from '../Pagination/Pagination';
// import styles from '../../Component/Table/Table.module.scss'
// import Loading from '../Loading/Loading';
// import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

// const Table = (props) => {

//     console.log('props.data', props.data)

//     return (
//         <>
//             <ScrollSync>
//                 <div className={styles.checkBoxStyle}>
//                     <ScrollSyncPane group="vertical">
//                         <div className={styles.mainDivCheckbox}>
//                             {
//                                 props?.data?.map((ele) => {
//                                     return (
//                                         <input type="checkbox" />
//                                     )
//                                 })
//                             }
//                         </div>
//                     </ScrollSyncPane>

//                     <ScrollSyncPane>
//                         <div>
//                             <DataTable
//                                 {...props}
//                                 columns={props?.columns.slice(1)}
//                                 className={styles.table}
//                                 progressComponent={<Loading />}
//                                 // pagination
//                                 responsive
//                             />
//                         </div>
//                     </ScrollSyncPane>
//                 </div>
//             </ScrollSync>
//             {/* <Pagination {...props?.paginationProps} /> */}
//         </>
//     )
// }

// export default Table


import React, { useRef } from 'react';
import DataTable from 'react-data-table-component';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import styles from '../../Component/Table/Table.module.scss';
import Loading from '../Loading/Loading';

const Table = (props) => {
    const mainDivCheckboxRef = useRef();
    const dataTableBodyRef = useRef();

    const handleTableScroll = (e) => {
        if (mainDivCheckboxRef.current && dataTableBodyRef.current) {
            mainDivCheckboxRef.current.scrollTop = dataTableBodyRef.current.scrollTop;
            mainDivCheckboxRef.current.scrollLeft = dataTableBodyRef.current.scrollLeft;
        }
    };

    return (
        <ScrollSync>
            <div className={styles.checkBoxStyle}>
                <ScrollSyncPane group="vertical">
                    <div
                        ref={mainDivCheckboxRef}
                        className={styles.mainDivCheckbox}
                        onScroll={handleTableScroll}
                    >
                        {props?.data?.map((row) => (
                            <div key={row.id} className={styles.cheDivmian}>
                                <input type="checkbox" className={styles.chekdiv} />
                            </div>
                        ))}
                    </div>
                </ScrollSyncPane>

                <ScrollSyncPane>
                    <div
                        ref={dataTableBodyRef}
                        onScroll={handleTableScroll}
                    >
                        <DataTable
                            {...props}
                            columns={props?.columns}
                            className={styles.table}
                            progressComponent={<Loading />}
                        />
                    </div>
                </ScrollSyncPane>
            </div>
        </ScrollSync>
    );
};

export default Table;
