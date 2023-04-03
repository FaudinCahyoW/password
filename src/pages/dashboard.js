import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Breadcrumb, Card, Col, Row, Avatar, List, Select } from "antd";
import VirtualList from "rc-virtual-list";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js/auto";

import PageLayout from "../layouts/pageLayout";

const { Option } = Select;

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;

const UserManagementPage = () => {
  // Chart
  var dataChart = {
    datasets: [
      {
        data: [
          {
            id: "Pt. Partners1",
            Partners: {
              1: { cost: 10, sales: 20, profit: 5 },
              2: { cost: 20, sales: 8, profit: 13 },
              3: { cost: 7, sales: 6, profit: 11 },
            },
          },
          {
            id: "Pt. Partners2",
            Partners: {
              1: { cost: 15, sales: 12, profit: 10 },
              2: { cost: 17, sales: 10, profit: 15 },
              3: { cost: 6, sales: 12, profit: 16 },
            },
          },
          {
            id: "Pt. Partners3",
            Partners: {
              1: { cost: 5, sales: 7, profit: 5 },
              2: { cost: 11, sales: 4, profit: 13 },
              3: { cost: 8, sales: 6, profit: 11 },
            },
          },
          {
            id: "Pt. Partners4",
            Partners: {
              1: { cost: 9, sales: 10, profit: 5 },
              2: { cost: 19, sales: 8, profit: 20 },
              3: { cost: 7, sales: 6, profit: 9 },
            },
          },
          {
            id: "Pt. Partners5",
            Partners: {
              1: { cost: 10, sales: 14, profit: 13 },
              2: { cost: 7, sales: 9, profit: 15 },
              3: { cost: 9, sales: 6, profit: 16 },
            },
          },
          {
            id: "Pt. Partners6",
            Partners: {
              1: { cost: 18, sales: 8, profit: 12 },
              2: { cost: 14, sales: 7, profit: 15 },
              3: { cost: 18, sales: 12, profit: 3 },
            },
          },
          {
            id: "Pt. Partners7",
            Partners: {
              1: { cost: 13, sales: 6, profit: 9 },
              2: { cost: 8, sales: 8, profit: 13 },
              3: { cost: 18, sales: 19, profit: 12 },
            },
          },
          {
            id: "Pt. Partners8",
            Partners: {
              1: { cost: 10, sales: 10, profit: 10 },
              2: { cost: 18, sales: 9, profit: 6 },
              3: { cost: 7, sales: 6, profit: 11 },
            },
          },
        ],
        backgroundColor: "#B09FFF",
        borderWidth: 1,
        borderRadius: 10,
        maxBarThickness: 20,
      },
    ],
  };
  var options = {
    parsing: {
      xAxisKey: "id",
      yAxisKey: "Partners.1.sales",
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Partners
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  return (
    <PageLayout
      titlePage={"Dashboard"}
      isiPage={
        <div>
          <Breadcrumb
            separator=">"
            style={{ fontWeight: "bold" }}
            className="pb-4"
            items={[
              {
                title: "Dashboard",
              },
            ]}
          />

          {/* page */}
          <Row gutter={16}>
            <Col span={14}>
              <Card
                title={
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Amount of Lead</span>
                    <Select placeholder="Select">
                      <Option value="china">Partner 1</Option>
                      <Option value="usa">Partner 2</Option>
                    </Select>
                  </div>
                }
                style={{
                  background: "#F8F8F9",
                }}
              >
                <Bar
                  height={200}
                  width={100}
                  data={dataChart}
                  options={options}
                />
              </Card>
            </Col>
            <Col span={10}>
              <Card
                title={
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Opportunity User Static</span>
                    <Select placeholder="Select">
                      <Option value="china">Partner 1</Option>
                      <Option value="usa">Partner 2</Option>
                    </Select>
                  </div>
                }
                style={{
                  background: "#F8F8F9",
                }}
              >
                <Bar
                  height={200}
                  width={100}
                  data={dataChart}
                  options={options}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16} className="pt-4">
            <Col span={14}>
              <Card
                title={
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Amount of Opportunity</span>
                    <Select placeholder="Select">
                      <Option value="china">Partner 1</Option>
                      <Option value="usa">Partner 2</Option>
                    </Select>
                  </div>
                }
                style={{
                  background: "#F8F8F9",
                }}
              >
                <Bar
                  height={200}
                  width={100}
                  data={dataChart}
                  options={options}
                />
              </Card>
            </Col>

            {/* Partner */}
            <Col span={10}>
              <Card
                title="Partner"
                style={{
                  background: "#F8F8F9",
                }}
              >
                <List>
                  <VirtualList
                    data={data}
                    height={ContainerHeight}
                    itemHeight={47}
                    itemKey="email"
                    onScroll={onScroll}
                  >
                    {(item) => (
                      <List.Item key={item.email}>
                        <List.Item.Meta
                          avatar={<Avatar src={item.picture.large} />}
                          title={
                            <span>
                              <strong>{item.name.last}</strong>
                            </span>
                          }
                        />
                        <div>02/09/2023</div>
                      </List.Item>
                    )}
                  </VirtualList>
                </List>
              </Card>
            </Col>
          </Row>
        </div>
      }
    ></PageLayout>
  );
};

export default UserManagementPage;
