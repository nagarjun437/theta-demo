import React, { Component } from "react";
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
            { name: "Home", path: "/" },
            { name: "Create Project" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <div className="card-title mb-3">Project Details</div>
                <form>
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="firstName2">Project name</label>
                      <input
                          type="text"
                          className="form-control form-control-rounded"
                          id="firstName2"
                          placeholder="Enter project name"
                      />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="lastName2">Project Description</label>
                      <input
                          type="text"
                          className="form-control form-control-rounded"
                          id="lastName2"
                          placeholder="Enter project description"
                      />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default CreateProjectForm;
