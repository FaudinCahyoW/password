import { Form, Input, Select, DatePicker } from "antd";
import React from "react";
import PageLayout from "../layouts/pageLayout";
import axios from "../api/axios";
import { useState } from "react";

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}


const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

function FormLeadComponent(props){
  const [LeadStatus, setLeadStatus] = useState()
  axios
  .get(
    "/leads/change-status/:id",
    JSON.stringify({
      LeadStatus
    })
  )
  .then(function (response){
    console.log(response)
  })
  .catch(function (error){
    console.log(error)
  })
  .finally(function(){

  })



    const text = props.textButton

    const onFinish = (value) => {
        console.log(value);
      };
    return(
        <div class="container">
      <div class="row row-cols-2">
        <div class="col">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem name="firstName" label="Contact">
                  <Input placeholder="value" />
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </div>
        <div class="col">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem name="firstName" label="Lead Source">
                  <Input placeholder="value" />
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </div>
        <div class="col">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem name="firstName" label="Lead Name">
                  <Input placeholder="value" />
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </div>
        <div class="col">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem name="firstName" label="Budget">
                  <Input placeholder="value" />
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </div>
        <div class="col">


          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem name="firstName" label="Lead Status">
                  <Select placeholder="Select Status">
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </div>
        <div class="col">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem name="firstName" label="Role">
                  <Input placeholder="value" />
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </div>
        <div class="col">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem name="firstName" label="Calendar">
                  <DatePicker placeholder="Select Date" className="w-100" />
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </div>
        <div class="col">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem name="firstName mt-3">
                  <button className="btn btn-success w-50 mt-4">{text}</button>
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </div>
      </div>
    </div>
    )
}
export default FormLeadComponent