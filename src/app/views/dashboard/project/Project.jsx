import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import LineChart4 from "app/views/charts/echarts/LineChart4";
import DoughnutChart from "app/views/charts/echarts/Doughnut";
import {Accordion, Button, Card, Dropdown, OverlayTrigger, ProgressBar, Table, Tooltip} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { classList } from "@utils";
import {Link} from "react-router-dom";
import Chart from "react-apexcharts";

import {
  bAOptions18
} from "app/views/widgets/statisticsWidgetChartOptions";
import ReactEcharts from "echarts-for-react";
import {echartBasicDoughnutOption} from "../../charts/echarts/echartOptions";

class Project extends Component {
  state = {
    cardList: [
      {
        icon: "i-Library",
        title: "8",
        subtitle: "Needs Approval"
      },
      {
        icon: "i-Tag-4",
        title: "37",
        subtitle: "Tasks Approved"
      },
      {
        icon: "i-Add-User",
        title: "11",
        subtitle: "Unassigned Tasks"
      },
      {
        icon: "i-Information",
        title: "27",
        subtitle: "In-Progress Tasks"
      }
    ],
    cardList2: [
      {
        icon: "i-Library",
        title: "10",
        subtitle: "Needs Approval"
      },
      {
        icon: "i-Tag-4",
        title: "19",
        subtitle: "Tasks Approved"
      },
      {
        icon: "i-Add-User",
        title: "9",
        subtitle: "Unassigned Tasks"
      },
      {
        icon: "i-Information",
        title: "16",
        subtitle: "In-Progress Tasks"
      }
    ]
  };

  handlePageClick = data => {
    let pageNumber = data.selected;
    let offset = Math.ceil(pageNumber * this.props.perPage);
    this.setState({ offset: offset }, () => {
      console.log(data);
    });
  };

  getUserStatusClass = status => {
    switch (status) {
      case "active":
        return "badge-success";
      case "delivered":
        return "badge-success";
      case "inactive":
        return "badge-warning";
      case "not delivered":
        return "badge-warning";
      case "pending":
        return "badge-primary";
      default:
        break;
    }
  };

  getStatusTextColor = status => {
    switch (status) {
      case "In Stock":
        return "text-success";
      case "Low Stock":
        return "text-warning";
      case "Out of Stock":
        return "text-danger";
      default:
        return "text-primary";
    }
  };

  render() {
    let {
      cardList = [],
      cardList2 = []
    } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Projects Dashboard" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-xl-9">
            <div className="navbar navbar-expand-lg navbar-light navbar-component rounded">
              <div className="text-center d-lg-none w-100">
                <button
                    type="button"
                    className="task-manager-button navbar-toggler text-white"
                    data-toggle="collapse"
                    data-target="#navbar-filter"
                >
                  <i className="i-Filter-2"> </i>
                </button>
              </div>

              <div className="navbar-collapse collapse" id="navbar-filter">
                <div className="filter-mobile">
                  <span className="navbar-text font-weight-semibold ">
                    Filter:
                  </span>
                </div>

                <ul className="navbar-nav flex-wrap">
                  <Dropdown className="nav-item mx-2">
                    <Dropdown.Toggle
                        as="span"
                        className="toggle-hidden cursor-pointer"
                    >
                      <Link className="navbar-nav-link" to="#">
                        <i className="i-Bar-Chart-2 "></i> By status
                      </Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Show all</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Open</Dropdown.Item>
                      <Dropdown.Item>On hold</Dropdown.Item>
                      <Dropdown.Item>Resolved</Dropdown.Item>
                      <Dropdown.Item>Closed</Dropdown.Item>
                      <Dropdown.Item>Duplicate</Dropdown.Item>
                      <Dropdown.Item>Invalid</Dropdown.Item>
                      <Dropdown.Item>Wontfix</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown className="nav-item mx-2">
                    <Dropdown.Toggle
                        as="span"
                        className="toggle-hidden cursor-pointer"
                    >
                      <Link className="navbar-nav-link" to="#">
                        <i className="i-Arrow-Turn-Right "></i> By priority
                      </Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Show all</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Highest</Dropdown.Item>
                      <Dropdown.Item>High</Dropdown.Item>
                      <Dropdown.Item>Normal</Dropdown.Item>
                      <Dropdown.Item>Low</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>

                <div className="filter-mobile">
                  <span className="navbar-text font-weight-semibold ">
                    Search:
                  </span>
                </div>
                <div>
                  <input
                      type="text"
                      className="form-control form-control-rounded"
                      id="projectName"
                      placeholder="Project Name"
                  />
                </div>
                {/*<span className="navbar-text font-weight-semibold ">*/}
                {/*    Search Project:*/}
                {/*  </span>*/}
                {/*<div className="card-body" id="custom-toggle">*/}
                {/*  <input*/}
                {/*      type="text"*/}
                {/*      placeholder="type  &  hit enter"*/}
                {/*      className="form-control"*/}
                {/*  />*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-6">
                <div className="card mb-4 card-gradient-inner">
                  <div className="card-body">
                    <h5 className="card-title">Project ABC</h5>
                    <div className="row">
                      {cardList.map((card, index) => (
                          <div key={index} className="col-md-3">
                            <Link to="/dashboard/jobs/#">
                              <div className="card card-zoom-in card-icon-big mb-4">
                                <div className="card-body text-center">
                                    <i className={card.icon}></i>
                                    <p className="text-muted mt-2 mb-0 text-capitalize">
                                      {card.subtitle}
                                    </p>
                                    <p className="lead text-18 mt-2 mb-0 text-capitalize">
                                      {card.title}
                                    </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                      ))}

                      <div className="col-md-3">
                        <div className="card mb-4 card-zoom-in">
                          <div className="card-body">
                            <h6 className="mb-2 text-muted">Jobs Status</h6>
                            <p className="mb-1 text-22 font-weight-light">40%</p>
                            <ProgressBar
                                variant="success"
                                now={40}
                                style={{ height: "4px" }}
                            ></ProgressBar>
                            <small className="text-muted">
                              Approved Jobs
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4 card-zoom-in">
                          <div className="card-body">
                            <h6 className="mb-2 text-muted">Tasks Status</h6>
                            <p className="mb-1 text-22 font-weight-light">60%</p>
                            <ProgressBar
                                variant="success"
                                now={60}
                                style={{ height: "4px" }}
                            ></ProgressBar>
                            <small className="text-muted">
                              Approved Tasks
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-end">
                    <ul className="list-inline mb-0 mt-2 mt-sm-0 d-flex">
                      <Dropdown className="list-inline-item">
                        <Dropdown.Toggle
                            as="span"
                            className="toggle-hidden cursor-pointer"
                        >
                          <i className="i-Gear-2"> </i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link to="/users/list"><i className="mx-1 i-Business-Mens" > </i></Link> Manage Users
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/project/view"><i className="mx-1 i-Network-Window" > </i></Link> View Project
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/project/create"><i className="mx-1 i-Edit" > </i></Link> Edit Project
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="#"><i className="mx-1 i-Paint-Brush" > </i></Link> Remove Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="card mb-4 card-gradient-inner">
                  <div className="card-body">
                    <h5 className="card-title">Project Construction</h5>
                    <div className="row">
                      {cardList2.map((card, index) => (
                          <div key={index} className="col-md-3">
                            <Link to="/dashboard/jobs/#">
                            <div className="card card-icon-big mb-4 card-zoom-in">
                              <div className="card-body text-center">
                                  <i className={card.icon}></i>
                                  <p className="text-muted mt-2 mb-0 text-capitalize">
                                    {card.subtitle}
                                  </p>
                                  <p className="lead text-18 mt-2 mb-0 text-capitalize">
                                    {card.title}
                                  </p>
                              </div>
                            </div>
                            </Link>
                          </div>
                      ))}

                      <div className="col-md-3">
                        <div className="card mb-4 card-zoom-in">
                          <div className="card-body">
                            <h6 className="mb-2 text-muted">Jobs Status</h6>
                            <p className="mb-1 text-22 font-weight-light">40%</p>
                            <ProgressBar
                                variant="success"
                                now={40}
                                style={{ height: "4px" }}
                            ></ProgressBar>
                            <small className="text-muted">
                              Approved Jobs
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4 card-zoom-in">
                          <div className="card-body">
                            <h6 className="mb-2 text-muted">Tasks Status</h6>
                            <p className="mb-1 text-22 font-weight-light">60%</p>
                            <ProgressBar
                                variant="success"
                                now={60}
                                style={{ height: "4px" }}
                            ></ProgressBar>
                            <small className="text-muted">
                              Approved Tasks
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-sm-flex  justify-content-end">
                    <div className="align-items-end" align="right">
                      <ul className="list-inline mb-0 mt-2 mt-sm-0 align-items-lg-end">
                        <Dropdown className="list-inline-item">
                          <Dropdown.Toggle
                              as="span"
                              className="toggle-hidden cursor-pointer"
                          >
                            <i className="i-Gear-2"> </i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Link to="/users/list"><i className="mx-1 i-Business-Mens" > </i></Link> Manage Users
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/project/view"><i className="mx-1 i-Network-Window" > </i></Link> View Project
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/project/create"><i className="mx-1 i-Edit" > </i></Link> Edit Project
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="#"><i className="mx-1 i-Paint-Brush" > </i></Link> Remove Project
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-6">
                <div className="card mb-4 card-gradient-inner-1">
                  <div className="card-body">
                    <h5 className="card-title">Project Name 2</h5>
                    <div className="row">
                      {cardList.map((card, index) => (
                          <div key={index} className="col-md-3">
                            <Link to="/dashboard/jobs/#">
                              <div className="card card-icon-big mb-4 card-zoom-in card-gradient">
                                <div className="card-body text-center">
                                  <i className={card.icon}></i>
                                  <p className="text-muted mt-2 mb-0 text-capitalize">
                                    {card.subtitle}
                                  </p>
                                  <p className="lead text-18 mt-2 mb-0 text-capitalize">
                                    {card.title}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                      ))}

                      <div className="col-md-3">
                        <div className="card mb-4 card-gradient card-zoom-in">
                          <div className="card-body">
                            <h6 className="mb-2 text-muted">Jobs Status</h6>
                            <p className="mb-1 text-22 font-weight-light">40%</p>
                            <ProgressBar
                                variant="success"
                                now={40}
                                style={{ height: "4px" }}
                            ></ProgressBar>
                            <small className="text-muted">
                              Approved Jobs
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4 card-gradient card-zoom-in">
                          <div className="card-body">
                            <h6 className="mb-2 text-muted">Tasks Status</h6>
                            <p className="mb-1 text-22 font-weight-light">60%</p>
                            <ProgressBar
                                variant="success"
                                now={60}
                                style={{ height: "4px" }}
                            ></ProgressBar>
                            <small className="text-muted">
                              Approved Tasks
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-end">
                    <ul className="list-inline mb-0 mt-2 mt-sm-0">
                      <Dropdown className="list-inline-item">
                        <Dropdown.Toggle
                            as="span"
                            className="toggle-hidden cursor-pointer"
                        >
                          <i className="i-Gear-2"> </i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link to="/users/list"><i className="mx-1 i-Business-Mens" > </i></Link> Manage Users
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/project/view"><i className="mx-1 i-Network-Window" > </i></Link> View Project
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/project/create"><i className="mx-1 i-Edit" > </i></Link> Edit Project
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="#"><i className="mx-1 i-Paint-Brush" > </i></Link> Remove Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="card mb-4 card-gradient-inner-1">
                  <div className="card-body">
                    <h5 className="card-title">Project Name 3</h5>
                    <div className="row">
                      {cardList.map((card, index) => (
                          <div key={index} className="col-md-3">
                            <Link to="/dashboard/jobs/#">
                              <div className="card card-icon-big mb-4 card-zoom-in">
                                <div className="card-body text-center">
                                  <i className={card.icon}></i>
                                  <p className="text-muted mt-2 mb-0 text-capitalize">
                                    {card.subtitle}
                                  </p>
                                  <p className="lead text-18 mt-2 mb-0 text-capitalize">
                                    {card.title}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                      ))}

                      <div className="col-md-3">
                        <div className="card mb-4 card-zoom-in">
                          <div className="card-body">
                            <h6 className="mb-2 text-muted">Jobs Status</h6>
                            <p className="mb-1 text-22 font-weight-light">40%</p>
                            <ProgressBar
                                variant="success"
                                now={40}
                                style={{ height: "4px" }}
                            ></ProgressBar>
                            <small className="text-muted">
                              Approved Jobs
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4 card-zoom-in">
                          <div className="card-body">
                            <h6 className="mb-2 text-muted">Tasks Status</h6>
                            <p className="mb-1 text-22 font-weight-light">60%</p>
                            <ProgressBar
                                variant="success"
                                now={60}
                                style={{ height: "4px" }}
                            ></ProgressBar>
                            <small className="text-muted">
                              Approved Tasks
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-sm-flex justify-content-end">
                    <div className="align-items-end" align="right">
                    <ul className="list-inline mb-0 mt-2 mt-sm-0 align-items-lg-end">
                      <Dropdown className="list-inline-item">
                        <Dropdown.Toggle
                            as="span"
                            className="toggle-hidden cursor-pointer"
                        >
                          <i className="i-Gear-2"> </i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link to="/users/list"><i className="mx-1 i-Business-Mens" > </i></Link> Manage Users
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/project/view"><i className="mx-1 i-Network-Window" > </i></Link> View Project
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/project/create"><i className="mx-1 i-Edit" > </i></Link> Edit Project
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="#"><i className="mx-1 i-Paint-Brush" > </i></Link> Remove Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                    </div>
                  </div>
                </div>
              </div>

          </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Project;
