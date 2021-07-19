import React, { Component } from "react";
import {Breadcrumb, CodeViewer} from "@gull";
import {Formik} from "formik";
import {classList} from "../../../@utils";
import * as yup from "yup";
import DateTime from "react-datetime";
import UploadFileForm from "./UploadFileForm";

class CreateTaskForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    city: "",
    cardNumber: "4444444444444444",
    state: "",
    password: "",
    repassword: "",
    zip: "",
    agree: [], //returns ['on'] when on/checked
    checkbox1: "",
    checkbox2: "",
    radio: "",
    range: {
      startDate: new Date(),
      endDate: (() => {
        let date = new Date();
        date.setDate(date.getDate() + 7);
        return date;
      })()
    }
  };

  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Tasks List", path: "/tasks/view" },
            { name: "Create Task" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <div className="card-title mb-3">Task Details</div>
                <form>
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="firstName2">Task name</label>
                      <input
                          type="text"
                          className="form-control form-control-rounded"
                          id="firstName2"
                          placeholder="Enter your first name"
                      />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="lastName2">Task Description name</label>
                      <input
                          type="text"
                          className="form-control form-control-rounded"
                          id="lastName2"
                          placeholder="Enter your last name"
                      />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="picker3">Due date</label>
                      <DateTime className="form-control-rounded" />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="phone1">Phase</label>
                      <select className="form-control form-control-rounded">
                        <option>Design Phase</option>
                        <option>Construction Phase</option>
                      </select>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="phone1">Category</label>
                      <select className="form-control form-control-rounded">
                        <option>Topographical Survey</option>
                        <option>Existing Structures</option>
                        <option>Soils Report</option>
                      </select>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="phone1">Job</label>
                      <select className="form-control form-control-rounded">
                        <option>Topographical Survey</option>
                        <option>Existing Structures</option>
                        <option>Soils Report</option>
                      </select>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="website2">Content URL</label>
                      <input
                          className="form-control form-control-rounded"
                          id="website2"
                          placeholder="Web address"
                      />
                    </div>

                    <div className="col-md-12">
                      <button className="btn btn-primary">Create Task</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <UploadFileForm/>
          </div>
        </div>

      </div>
    );
  }
}

const basicFormSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  phone: yup.string().required("select any option"),
  select: yup.string().required("select any option"),
  birthDay: yup.string().required("birthDay is required"),
  cardNumber: yup
      .number()
      .test("card-validator", "Invlid card", value =>
          value && value.toString().length !== 16 ? false : true
      )
      .required("Card number is required"),
  email: yup
      .string()
      .email("Invalid email")
      .required("email is required"),
  checkbox1: yup.string().required("Required"),
  checkbox2: yup.string().required("Required"),
  switch: yup.string().required("Required")
  // password: yup
  //   .string()
  //   .min(8, "Password must be 8 character long")
  //   .required("password is required"),
  // repassword: yup
  //   .string()
  //   .required("repeat password")
  //   .oneOf([yup.ref("password")], "Passwords must match")
});

const basicFormSchema1 = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  username: yup.string().required("select any option"),
  city: yup.string().required("birthDay is required"),
  zip: yup.number().required("email is required"),
  agree: yup.string().required("Required"),
  state: yup.string().required("Required")
});

const tooltipFormSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  username: yup.string().required("select any option"),
  city: yup.string().required("birthDay is required"),
  zip: yup.number().required("email is required"),
  agree: yup.string().required("Required"),
  state: yup.string().required("Required")
});

export default CreateTaskForm;
