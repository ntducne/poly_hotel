import { SearchOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Paginations from './Pagination';

interface TableCustomProps {
    data: Array<any>;
    columns: Array<any>;
    loading: boolean;
    // changePage: (page: number) => void;
}

const TableCustom = (props :TableCustomProps) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: any,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: any): ColumnType<any> => ({
        filterDropdown: (
            { setSelectedKeys, selectedKeys, confirm, clearFilters, close }
        ) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Tìm ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Tìm
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Đặt lại
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Lọc
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Đóng
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const newColumn = props.columns.map((item) => {
        if(props.data.length == 0) return item;
        if (item.key !== 'action' && item.dataIndex) {
            return {
                ...item,
                ...getColumnSearchProps(item.key),
                sorter: (a: any, b: any) => a[item.key].length - b[item.key].length,
                sortDirections: ['descend', 'ascend'],
            };
        }
        if(item.key != 'action'){
            return {
                ...item,
                // ...getColumnSearchProps(item.key),

                sorter: (a: any, b: any) => a[item.key].length - b[item.key].length,
                sortDirections: ['descend', 'ascend'],
            };
        }
        return item;
       
    })

    const newData = props.data.map((item: any) => ({
        ...item,
        key: item.id,
    }));

    const changePage = () => {
        console.log('change page');
    }
    return (
        <>
            <Table loading={props.loading} columns={newColumn} dataSource={newData} pagination={false} />
            {/* {props.data.length > 0 && <Paginations page={10}  changePage={changePage}/> } */}
        </>
    );
};

export default TableCustom;