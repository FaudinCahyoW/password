import PageLayout from "../layouts/pageLayout";
import {
  Button,
  Card,
  Input,
  Pagination,
  notification,
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
  FilePdfOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom/dist";



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
    <div className="d-flex align-items-center">
      <h6 className="text-secondary">
        <strong>Download:</strong>
      </h6>
      <Button
        className="mx-2"
        type="primary"
        style={{ background: "#02304A" }}
        icon={<FilePdfOutlined />}
      >
        Export to PDF
      </Button>
      <Button
        type="primary"
        style={{ background: "green" }}
        icon={<FileExcelOutlined />}
      >
        Export to Excel
      </Button>
    </div>
  </>
);

const { Search } = Input;
const onSearch = (value) => console.log(value);

const { Option } = Select;

const dropLead = (
  <div>
    <span>Show</span>
    <Select defaultValue="10" placeholder="Select" className="mx-2">
      <Option value="10">10</Option>
      <Option value="20">20</Option>
      <Option value="50">50</Option>
      <Option value="100">100</Option>
    </Select>
    <span>entries</span>
  </div>
);

const ListLeadPage = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api.error({
      
      message: 'Data successfully deleted',
    });
  };

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
        {contextHolder}
        <button className="border-0" onClick={()=>openNotificationWithIcon()}>
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



  const link = useNavigate();
  const addLead = (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      onClick={() => link("/addlead")}
    >
      Add Lead
    </Button>
  );

  return (
    <PageLayout
      titlePage={"Lead"}
      isiPage={
        <Card className="card-content">
          {/* <div className="container "> */}
          {/* <div className="w-100 d-flex">
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
            </div> */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex">
              {dropLead}
              <Search
                placeholder="Search"
                allowClear
                onSearch={onSearch}
                style={{
                  width: 250,
                  marginLeft: 20,
                }}
              />
            </div>
            {addLead}
          </div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            showSizeChanger
          ></Table>
          {exportPage}
          {/* </div> */}
        </Card>
      }
    ></PageLayout>
  );
};
export default ListLeadPage;
