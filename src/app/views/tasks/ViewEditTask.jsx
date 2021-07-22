import React, { Component } from "react";
import {Breadcrumb, CodeViewer} from "@gull";
import {Formik} from "formik";
import {classList} from "../../../@utils";
import * as yup from "yup";
import DateTime from "react-datetime";
import UploadFileForm from "./UploadFileForm";
import GalleryView from "./GalleryView";

class ViewEditTask extends Component {
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
            { name: "View Task" }
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
                      <h1 className="text-16">Task Name</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="lastName2">Task Description   </label>
                      <h1 className="text-16">Task Description</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="picker3">Due date</label>
                      <h1 className="text-16">23-08-2021</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="phone1">Phase</label>
                      <h1 className="text-16">Design Phase</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="phone1">Category</label>
                      <h1 className="text-16">Topographical Survey</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="phone1">Job</label>
                      <h1 className="text-16">Existing Structures</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="website2">Content URL</label>
                      <h1 className="text-16">https://jobdone-ui.netlify.app/</h1>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card"><GalleryView/></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
              <div className="card"><UploadFileForm/></div>
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

export default ViewEditTask;
