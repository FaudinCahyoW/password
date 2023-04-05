import PageLayout from "../layouts/pageLayout";
import {
  Button,
  Card,
  Input,
  Pagination,
  Select,
  Space,
  Table,
  Tabs,
} from "antd";
import {
  FormOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Number",
    dataIndex: "key",
  },

  {
    title: "Contact",
    dataIndex: "name",
    sorter: true,
    key: "name",
  },
  {
    title: "Lead Name",
    dataIndex: "age",
    sorter: true,
    key: "age",
  },
  {
    title: "Lead Status",
    dataIndex: "address",
    sorter: true,
    key: "address",
  },
  {
    title: "Year & Quarter",
    dataIndex: "year",
  },
  {
    title: "Lead Source",
    dataIndex: "source",
  },
  {
    title: "Budget",
    dataIndex: "budget",
    sorter: true,
    key: "budget",
  },
  {
    title: "Role",
    dataIndex: "role",
    sorter: true,
    key: "role",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <button className="border-0 bg-light">
          <FormOutlined
            style={{
              color: "#624DE3",
            }}
          />
        </button>
        <button className="border-0 b-light">
          <EyeOutlined
            style={{
              color: "#624DE3",
            }}
          />
        </button>
        <button className="border-0 bg-light">
          <DeleteOutlined
            style={{
              color: "#ED0000",
            }}
          />
        </button>
      </Space>
    ),
  },
];

const data = [];
for (let i = 1; i < 46; i++) {
  data.push({
    key: i,
    name: `John Brown `,
    age: `32`,
    address: `New York No. 1 Lake Park `,
    year: "12/10/2022/1",
    source: "Website",
    budget: `Rp. 1000.000 `,
    role: `Manager `,
  });
}

const exportPage = (
  <>
    <div className="d-flex">
      <Button type="primary">Export to CSV</Button>
      <Button type="success">Export to Excel</Button>
    </div>
  </>
);

const { Search } = Input;
const onSearch = (value) => console.log(value);

const dropLead = (
  <select className="rounded-2 bg-primary me-3">
    <option value="china">10</option>
    <option value="china">7</option>
    <option value="usa">5</option>
  </select>
);

const ListLeadPage = () => {
  const Navigate = useNavigate();

  const addLead = (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      onClick={() => Navigate("/addlead")}
    >
      Add Lead
    </Button>
  );
  return (
    <PageLayout
      titlePage={"Lead"}
      isiPage={
        <div className="container ">
          <div className="w-100 d-flex">
            <Card>
              <div className="d-flex">
                <h6 className="me-4">Show</h6>
                {dropLead}
                <h6 className="me-4">entries</h6>

                <Search
                  placeholder="Search"
                  allowClear
                  onSearch={onSearch}
                  style={{
                    width: 250,
                  }}
                />
              </div>
            </Card>
            <Card className="ms-auto border-0">
              <Tabs tabBarExtraContent={addLead} />
            </Card>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            showSizeChanger
            summary={() => (
              <Table.Summary fixed={"bottom"}>
                <Table.Summary.Cell index={0}>{exportPage}</Table.Summary.Cell>
              </Table.Summary>
            )}
          ></Table>
        </div>
      }
    ></PageLayout>
  );
};
export default ListLeadPage;
