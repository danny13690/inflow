import { Table } from 'antd';

export function InfluencerTable (props) {
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name < b.name,
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    sorter: (a, b) => a.compare < b.gender,
    sortDirections: ['ascend', 'descend'],
    filters: [
        {
            text: 'F',
            value: 'F',
        },
        {
            text: 'M',
            value: 'M',
        },
    ],
    onFilter: (value, record) => record.gender === value,

  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    filters: [
        {
            text: 'SF',
            value: 'SF',
        },
        {
            text: 'New York',
            value: 'New York',
        },
    ],
    onFilter: (value, record) => record.location === 'SF',

  },
  {
    title: 'Total Reach',
    dataIndex: 'reach',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  }
];

const data = [
  {
    key: '1',
    name: 'Jannik Obenhoff',
    gender: 'F',
    age: 20,
    location: 'New York',
    reach: 767.5
  },
  {
    key: '2',
    name: 'Maria Chen',
    gender: 'F',
    age: 22,
    location: 'SF',
    reach: 10
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
return (
    <Table columns={columns} dataSource={data} onChange={onChange} />
)
}
