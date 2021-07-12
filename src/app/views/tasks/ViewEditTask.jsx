import React, { Component } from "react";
import {Breadcrumb, CodeViewer} from "@gull";
import {Formik} from "formik";
import {classList} from "../../../@utils";
import * as yup from "yup";
import DateTime from "react-datetime";
import UploadFileForm from "./UploadFileForm";

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

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <Formik
                    initialValues={this.state}
                    validationSchema={basicFormSchema1}
                    onSubmit={this.handleSubmit}
                >
                  {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                    }) => {
                    return (
                        <form
                            className="needs-validation"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                          <div className="form-row">
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field":
                                      !errors.firstName && touched.firstName,
                                  "invalid-field":
                                      errors.firstName && touched.firstName
                                })}
                            >
                              <label htmlFor="validationCustom202">
                                Task Name
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom202"
                                  placeholder="Task Name"
                                  name="firstName"
                                  value={values.firstName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <div className="valid-feedback">Looks good!</div>
                              <div className="invalid-feedback">
                                Task Name is required
                              </div>
                            </div>
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field":
                                      touched.lastName && !errors.lastName,
                                  "invalid-field":
                                      touched.lastName && errors.lastName
                                })}
                            >
                              <label htmlFor="validationCustom222">
                                Task Description
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom222"
                                  placeholder="Task Description"
                                  value={values.lastName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="lastName"
                                  required
                              />
                              <div className="valid-feedback">Looks good!</div>
                              <div className="invalid-feedback">
                                Task Description is required
                              </div>
                            </div>
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field":
                                      touched.username && !errors.username,
                                  "invalid-field":
                                      touched.username && errors.username
                                })}
                            >
                              <label htmlFor="validationCustomUsername">
                                Username
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                <span
                                    className="input-group-text"
                                    id="inputGroupPrepend"
                                >
                                  @
                                </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustomUsername"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    required
                                />
                                <div className="invalid-feedback">
                                  Please choose a username.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field": touched.city && !errors.city,
                                  "invalid-field": touched.city && errors.city
                                })}
                            >
                              <label htmlFor="validationCustom03">City</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom03"
                                  placeholder="City"
                                  name="city"
                                  value={values.city}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid city.
                              </div>
                            </div>
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field": touched.state && !errors.state,
                                  "invalid-field": touched.state && errors.state
                                })}
                            >
                              <label htmlFor="validationCustom204">State</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom204"
                                  placeholder="State"
                                  name="state"
                                  value={values.state}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid state.
                              </div>
                            </div>
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field": touched.zip && !errors.zip,
                                  "invalid-field": touched.zip && errors.zip
                                })}
                            >
                              <label htmlFor="validationCustom05">Zip</label>
                              <input
                                  type="number"
                                  className="form-control"
                                  id="validationCustom05"
                                  placeholder="Zip"
                                  name="zip"
                                  value={values.zip}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid zip.
                              </div>
                            </div>
                          </div>
                          <div
                              className={classList({
                                "col-md-4 mb-3": true,
                                "valid-field":
                                    touched.agree &&
                                    !errors.agree &&
                                    values.agree.length,
                                "invalid-field":
                                    touched.agree &&
                                    errors.agree &&
                                    !values.agree.length
                              })}
                          >
                            <label className="checkbox checkbox-primary">
                              <input
                                  type="checkbox"
                                  name="agree"
                                  value={values.agree}
                                  checked={values.agree.length}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <span>Agree to terms and conditions</span>
                              <span className="checkmark"></span>
                            </label>

                            <div className="invalid-feedback">
                              You must agree before submitting.
                            </div>
                          </div>
                          <button className="btn btn-primary" type="submit">
                            Submit form
                          </button>
                        </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Tooltip message</div>
                <Formik
                    initialValues={this.state}
                    validationSchema={basicFormSchema}
                    onSubmit={this.handleSubmit}
                >
                  {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                    }) => {
                    return (
                        <form
                            className="needs-validation"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                          <div className="form-row">
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field":
                                      !errors.firstName && touched.firstName,
                                  "invalid-field":
                                      errors.firstName && touched.firstName
                                })}
                            >
                              <label htmlFor="validationCustom01">
                                First name
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom01"
                                  placeholder="First name"
                                  name="firstName"
                                  value={values.firstName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <div className="valid-tooltip">Looks good!</div>
                              <div className="invalid-tooltip">
                                First name is required
                              </div>
                            </div>
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field":
                                      touched.lastName && !errors.lastName,
                                  "invalid-field":
                                      touched.lastName && errors.lastName
                                })}
                            >
                              <label htmlFor="validationCustom02">
                                Last name
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom02"
                                  placeholder="Last name"
                                  value={values.lastName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="lastName"
                                  required
                              />
                              <div className="valid-tooltip">Looks good!</div>
                              <div className="invalid-tooltip">
                                Last name is required
                              </div>
                            </div>
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field":
                                      touched.username && !errors.username,
                                  "invalid-field":
                                      touched.username && errors.username
                                })}
                            >
                              <label htmlFor="validationCustomUsername1">
                                Username
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                <span
                                    className="input-group-text"
                                    id="inputGroupPrepend"
                                >
                                  @
                                </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustomUsername1"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    required
                                />
                                <div className="invalid-tooltip">
                                  Please choose a username.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field": touched.city && !errors.city,
                                  "invalid-field": touched.city && errors.city
                                })}
                            >
                              <label htmlFor="validationCustom203">City</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom203"
                                  placeholder="City"
                                  name="city"
                                  value={values.city}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <div className="invalid-tooltip">
                                Please provide a valid city.
                              </div>
                            </div>
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field": touched.state && !errors.state,
                                  "invalid-field": touched.state && errors.state
                                })}
                            >
                              <label htmlFor="validationCustom04">State</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom04"
                                  placeholder="State"
                                  name="state"
                                  value={values.state}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <div className="invalid-tooltip">
                                Please provide a valid state.
                              </div>
                            </div>
                            <div
                                className={classList({
                                  "col-md-4 mb-3": true,
                                  "valid-field": touched.zip && !errors.zip,
                                  "invalid-field": touched.zip && errors.zip
                                })}
                            >
                              <label htmlFor="validationCustom205">Zip</label>
                              <input
                                  type="number"
                                  className="form-control"
                                  id="validationCustom205"
                                  placeholder="Zip"
                                  name="zip"
                                  value={values.zip}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <div className="invalid-tooltip">
                                Please provide a valid zip.
                              </div>
                            </div>
                          </div>
                          <div
                              className={classList({
                                "col-md-4 mb-3": true,
                                "valid-field":
                                    touched.agree &&
                                    !errors.agree &&
                                    values.agree.length,
                                "invalid-field":
                                    touched.agree &&
                                    errors.agree &&
                                    !values.agree.length
                              })}
                          >
                            <label className="checkbox checkbox-primary">
                              <input
                                  type="checkbox"
                                  name="agree"
                                  value={values.agree}
                                  checked={values.agree.length}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  required
                              />
                              <span>Agree to terms and conditions</span>
                              <span className="checkmark"></span>
                            </label>

                            <div className="invalid-tooltip">
                              You must agree before submitting.
                            </div>
                          </div>
                          <button className="btn btn-primary" type="submit">
                            Submit form
                          </button>
                        </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
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
