import React, { Component, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import {Breadcrumb, CodeViewer} from "@gull";
import {Formik} from "formik";
import {classList} from "../../../@utils";
import * as yup from "yup";
import DateTime from "react-datetime";

class CreateProjectForm extends Component {
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
    },
    showCustomAlert: false
  };

  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    this.setState({ showCustomAlert: true });
  };

  closeCustomAlert = () => {
    this.setState({ showCustomAlert: false });
  };

  render() {
  let { showCustomAlert } = this.state;
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Create Project" }
          ]}
        ></Breadcrumb>
        {showCustomAlert && (
                  <Alert
                    className="text-center alert-card"
                    variant="warning"
                    dismissible
                    onClose={this.closeCustomAlert}
                  >
                    Project created successfully. JobDone App makes project management easier!
                  </Alert>
                )}
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <div className="card-title mb-3">Project Details</div>
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
                    <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                      <div className="row">
                        <div className={classList({
                                       "col-md-6 mb-3 form-group": true,
                                       "valid-field":
                                         !errors.firstName2 && touched.firstName2,
                                       "invalid-field":
                                         errors.firstName2 && touched.firstName2
                                     })} >
                          <label htmlFor="firstName2">Project name</label>
                          <input
                              type="text"
                              className="form-control form-control-rounded"
                              id="firstName2" value={values.firstName2} onChange={handleChange} onBlur={handleBlur} required
                              placeholder="Enter project name"
                          />

                          <div className="invalid-tooltip">
                            Project Name is required
                          </div>
                        </div>

                        <div className={classList({
                                          "col-md-6 mb-3 form-group": true,
                                          "valid-field":
                                            !errors.lastName2 && touched.lastName2,
                                          "invalid-field":
                                            errors.lastName2 && touched.lastName2
                                        })}>
                          <label htmlFor="lastName2">Project Description</label>
                          <input
                              type="text"
                              className="form-control form-control-rounded"
                              id="lastName2" value={values.lastName2} onChange={handleChange} onBlur={handleBlur} required
                              placeholder="Enter project description"
                          />
                          <div className="invalid-tooltip">
                              Project Description is required
                            </div>
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label htmlFor="picker3">Start date</label>
                          <DateTime className="form-control-rounded" />
                        </div>
                        <div className="col-md-6 form-group mb-3">
                          <label htmlFor="picker3">Due date</label>
                          <DateTime className="form-control-rounded" />
                        </div>

                        <div className="col-md-6 form-group mb-3">
                          <label htmlFor="phone1">Configuration</label>
                          <select className="form-control form-control-rounded">
                            <option>Default Configuration</option>
                            <option>Configuration Job Done</option>
                          </select>
                        </div>

                        <div className="col-md-6 form-group mb-3">
                          <label htmlFor="phone1">Company</label>
                          <select className="form-control form-control-rounded">
                            <option>Client ABC</option>
                            <option>Client Infra Construction</option>
                            <option>Client Oil Construction</option>
                          </select>
                        </div>

                        <div className="col-md-6 form-group mb-3">
                          <label htmlFor="email">Manager Email address</label>
                          <input
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="xox@jobdone.com"
                            type="email"
                          />
                          <small
                            id="emailHelp"
                            className="form-text text-muted"
                          >
                            We'll never share your email with anyone else.
                          </small>
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
                          <button className="btn btn-primary">Create Project</button>
                        </div>
                      </div>
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
  firstName2: yup.string().required("Project Name is required"),
  lastName2: yup.string().required("Project Description is required")
});

export default CreateProjectForm;
