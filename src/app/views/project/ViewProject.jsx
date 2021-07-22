import React, { Component } from "react";
import {Breadcrumb, CodeViewer} from "@gull";
import {Formik} from "formik";
import {classList} from "../../../@utils";
import * as yup from "yup";
import DateTime from "react-datetime";

class ViewProject extends Component {
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
            { name: "View Project" }
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
                      <h1 className="text-16 ">Industrial Oil Project</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="lastName2">Project Description</label>
                      <h1 className="text-16">Industrial Oil Project Description</h1>
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="picker3">Start date</label>
                      <h1 className="text-16">01-07-2021</h1>
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="picker3">Due date</label>
                      <h1 className="text-16">01-08-2022</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="phone1">Configuration</label>
                      <h1 className="text-16">Configuration Job Done</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="phone1">Company</label>
                      <h1 className="text-16">Client Oil Construction</h1>
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="email">Manager Email address</label>
                      <h1 className="text-16">admin@jobdone.com</h1>
                      <small
                        id="emailHelp"
                        className="form-text text-muted"
                      >
                        We'll never share your email with anyone else.
                      </small>
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
      </div>
    );
  }
}


export default ViewProject;
