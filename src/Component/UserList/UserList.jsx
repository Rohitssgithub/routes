import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from '../../Routing/routing';
import { Outlet } from 'react-router-dom';
import styles from '../../Component/sideBarNavigation/SidebarNavigation.module.scss'
import SidebarNavigation from '../../Component/sideBarNavigation/SidebarNavigation';
import Table from '../../Component/Table/Table';
import axios from 'axios'
import ModalFileUpload from '../Modal/ModalFileUpload';
import Modal from '../Modal/Modal'
import BasicModal from '../Modal/Modal';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../Redux/Slice/UserSlice';
import EditUserModal from '../Modal/EditUserModal';
import Loading from '../Loading/Loading';
import UserDeleteModal from '../Modal/UserDeleteModal';
import SingleUserModal from '../Modal/SingleUserModal/SingleUserModal';
const UserList = () => {
    let dispatch = useDispatch()
    const { allusers, loading } = useSelector((state) => state.users)
    const [modalOpen, setModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    let [user, setUsers] = useState([])
    const [rowsPerPageValue, setRowsPerPageValue] = useState(10);
    const [count, setCount] = useState(0);
    const [pageSelected, setPageSelected] = useState(1);
    const [seletedData, setSelectedData] = useState({});
    const [deleteId, setDeleteId] = useState(null);
    const [singleUserModal, setSingleUserModal] = useState(false);
    const [singleUser, setSingleUser] = useState(false);



    console.log('singleUser', singleUser)
    const handleUpdate = (data) => {
        setSelectedData(data)
        setModalOpen(true)
    }
    const handleDelete = (data) => {
        setDeleteModalOpen(true)
        setDeleteId(data.id)
    }
    const handleAddFunction = () => {
        setSelectedData({})
        setModalOpen(true)
    }
    const handleNameClick = (row) => {
        setSingleUser(row.id)
        setSingleUserModal(true)
    };

    const columns = [
        {
            name: 'Name',
            // selector: row => row.name,
            selector: (row) => (
                <span
                    className="user-name-link"
                    onClick={() => handleNameClick(row)}
                    style={{ cursor: 'pointer' }}
                >
                    {row.name}
                </span>
            ),
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <Button label='Edit' className='btn btn-primary mx-2' onClick={() => handleUpdate(row)} />
                        <Button label='Delete' className='btn btn-danger' onClick={() => handleDelete(row)} />
                    </>
                )
            },
        },
    ];



    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
    return (
        <>
            {
                singleUserModal && <SingleUserModal singleUser={singleUser} setSingleUser={setSingleUser} setSingleUserModal={setSingleUserModal} singleUserModal={singleUserModal}/>
            }
            {
                modalOpen && <EditUserModal modalOpen={modalOpen} setModalOpen={setModalOpen} seletedData={seletedData} />
            }

            {
                deleteModalOpen && <UserDeleteModal deleteModalOpen={deleteModalOpen} setDeleteModalOpen={setDeleteModalOpen} setDeleteId={setDeleteId} deleteId={deleteId} />
            }

            <div className={styles.topDiv}>
                <Button label="Add User" className='btn btn-danger my-3 ' onClick={handleAddFunction} />
            </div>
            <Table
                columns={columns}
                data={allusers}
                className={styles.candidatesTable}
                paginationProps={{
                    isPagination: true,
                    tableName: "Report",
                    currentPage: 1,
                    totalCount: count,
                    rowsPerPageValue: rowsPerPageValue,
                    setRowsPerPageValue: setRowsPerPageValue,
                    setPageSelected: setPageSelected,
                }}

            />
            {loading && <Loading />}

        </>
    )
}

export default UserList