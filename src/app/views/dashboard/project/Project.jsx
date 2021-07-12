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
        subtitle: "Pending Approval"
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
      cardList = []
    } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Projects Dashboard" }
          ]}
        ></Breadcrumb>

        <div className="row mb-4">
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
          <div className="col-xl-9">
            <div className="row">
              <div className="card mb-2">
                <div className="card-header">Project Name</div>
                <div className="card-body">
                  <h5 className="card-title">Project Description</h5>
                  <div className="row">
                    {cardList.map((card, index) => (
                        <div key={index} className="col-md-3">
                          <div className="card mb-4">
                            <div className="card-body text-center">
                              <Link to="/dashboard/jobs/#">
                                <i className={card.icon}></i>
                                <p className="text-muted mt-2 mb-0 text-capitalize">
                                  {card.subtitle}
                                </p>
                                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                                  {card.title}
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                    ))}

                    <div className="col-md-3">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h6 className="mb-2 text-muted">Jobs Progress</h6>
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
                      <div className="card mb-4">
                        <div className="card-body">
                          <h6 className="mb-2 text-muted">Tasks Progress</h6>
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

                  <div className="row">
                    <div className="col-lg">
                      <SimpleCard
                          className="mb-3"
                          title="Project Details"
                      >
                        <Card className="shadow-sm mb-3">
                          <Accordion>
                            <Card.Header className="d-flex align-items-center justify-content-between">
                              <Accordion.Toggle
                                  className="cursor-pointer mb-0 text-primary"
                                  as="span"
                                  eventKey="projectAdmins"
                              >
                                Project Admins
                              </Accordion.Toggle>
                              <div className="d-flex">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip><strong>Add Project Admin</strong></Tooltip>}
                                >
                                  <Link to="/users/list"><i className="mx-1 i-Add-User" > </i></Link>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip><strong>Manage Project Admins</strong></Tooltip>}
                                ><Link to="/users/list"><i className="mx-1 i-Edit" > </i></Link>
                                </OverlayTrigger>
                              </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="projectAdmins">
                              <div className="card-body" id="custom-toggle4">
                                <ul className="media-list">
                                  <li className="media mb-2">
                                    <Link to="#" className="mr-4">
                                      <img
                                          src="../assets/images/faces/1.jpg"
                                          className="rounded-circle"
                                          width="36"
                                          alt="asd"
                                          srcSet=""
                                      />
                                    </Link>
                                    <div className="ul-task-manager__media">
                                      <Link to="#">James Alexander gull</Link>
                                      <div className="font-size-sm text-muted">
                                        Santa Ana,CA
                                      </div>
                                    </div>
                                    <div className="ml-3 align-self-center">
                                      <span className="badge badge-mark"></span>
                                    </div>
                                  </li>

                                  <li className="media mb-2">
                                    <Link to="#" className="mr-4">
                                      <img
                                          src="../assets/images/faces/1.jpg"
                                          className="rounded-circle"
                                          width="36"
                                          alt="asd"
                                          srcSet=""
                                      />
                                    </Link>
                                    <div className="ul-task-manager__media">
                                      <Link to="#">James Alexander</Link>
                                      <div className="font-size-sm text-muted">
                                        Santa Ana,CA
                                      </div>
                                    </div>
                                    <div className="ml-3 align-self-center">
                                      <span className="badge badge-mark "></span>
                                    </div>
                                  </li>

                                  <li className="media mb-2">
                                    <Link to="#" className="mr-4">
                                      <img
                                          src="../assets/images/faces/1.jpg"
                                          className="rounded-circle"
                                          width="36"
                                          alt="asd"
                                          srcSet=""
                                      />
                                    </Link>
                                    <div className="ul-task-manager__media">
                                      <Link to="#">James Alexander</Link>
                                      <div className="font-size-sm text-muted">
                                        Santa Ana,CA
                                      </div>
                                    </div>
                                    <div className="ml-3 align-self-center">
                                      <span className="badge badge-mark"></span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Accordion.Collapse>
                          </Accordion>
                        </Card>

                        <Card className="shadow-sm mb-3">
                          <Accordion>
                            <Card.Header className="d-flex align-items-center justify-content-between">
                              <Accordion.Toggle
                                  className="cursor-pointer mb-0 text-primary"
                                  as="span"
                                  eventKey="projectAdmins"
                              >
                                Project Users
                              </Accordion.Toggle>
                              <div className="d-flex">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip><strong>Add Project User</strong></Tooltip>}
                                ><i className="mx-1 i-Add-User" > </i>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip><strong>Manage Project Users</strong></Tooltip>}
                                ><i className="mx-1 i-Edit" > </i>
                                </OverlayTrigger>
                              </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="projectAdmins">
                              <div className="card-body" id="custom-toggle4">
                                <ul className="media-list">
                                  <li className="media mb-2">
                                    <Link to="#" className="mr-4">
                                      <img
                                          src="../assets/images/faces/1.jpg"
                                          className="rounded-circle"
                                          width="36"
                                          alt="asd"
                                          srcSet=""
                                      />
                                    </Link>
                                    <div className="ul-task-manager__media">
                                      <Link to="#">James Alexander gull</Link>
                                      <div className="font-size-sm text-muted">
                                        Santa Ana,CA
                                      </div>
                                    </div>
                                    <div className="ml-3 align-self-center">
                                      <span className="badge badge-mark"></span>
                                    </div>
                                  </li>

                                  <li className="media mb-2">
                                    <Link to="#" className="mr-4">
                                      <img
                                          src="../assets/images/faces/1.jpg"
                                          className="rounded-circle"
                                          width="36"
                                          alt="asd"
                                          srcSet=""
                                      />
                                    </Link>
                                    <div className="ul-task-manager__media">
                                      <Link to="#">James Alexander</Link>
                                      <div className="font-size-sm text-muted">
                                        Santa Ana,CA
                                      </div>
                                    </div>
                                    <div className="ml-3 align-self-center">
                                      <span className="badge badge-mark "></span>
                                    </div>
                                  </li>

                                  <li className="media mb-2">
                                    <Link to="#" className="mr-4">
                                      <img
                                          src="../assets/images/faces/1.jpg"
                                          className="rounded-circle"
                                          width="36"
                                          alt="asd"
                                          srcSet=""
                                      />
                                    </Link>
                                    <div className="ul-task-manager__media">
                                      <Link to="#">James Alexander</Link>
                                      <div className="font-size-sm text-muted">
                                        Santa Ana,CA
                                      </div>
                                    </div>
                                    <div className="ml-3 align-self-center">
                                      <span className="badge badge-mark"></span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Accordion.Collapse>
                          </Accordion>
                        </Card>


                      </SimpleCard>
                    </div>
                  </div>
                </div>

                <div className="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
                  {/*<span className="font-weight-semibold">*/}
                  {/*    <Link to="/dashboard/jobs/#" className="btn btn-link">*/}
                  {/*      Pending Approval Jobs*/}
                  {/*    </Link>*/}
                  {/*    <Link to="/dashboard/jobs/#" className="btn btn-link">*/}
                  {/*      Unassigned Jobs*/}
                  {/*    </Link>*/}
                  {/*    <Link to="/dashboard/jobs/#" className="btn btn-link">*/}
                  {/*      In-Progress Jobs*/}
                  {/*    </Link>*/}
                  {/*    <Link to="/dashboard/jobs/#" className="btn btn-link">*/}
                  {/*      Approved Jobs*/}
                  {/*    </Link>*/}
                  {/*    <Link to="/dashboard/jobs/#" className="btn btn-link">*/}
                  {/*      All Jobs*/}
                  {/*    </Link>*/}
                  {/*  </span>*/}
                  <span></span>
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
                          <i className="i-Medal-3"> </i> Assign Admin
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/forms/basic"><i className="i-Edit"> </i> Edit Project</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="i-Paint-Brush"> </i> Remove Project
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="card mb-2">
                <div className="card-header">Project Name 2</div>
                <div className="card-body">
                  <h5 className="card-title">Project Description 2</h5>
                  <div className="row">
                    {cardList.map((card, index) => (
                        <div key={index} className="col-md-3">
                          <div className="card card-icon-big mb-4">
                            <div className="card-body text-center">
                              <Link to="/dashboard/jobs/#">
                                <i className={card.icon}></i>
                                <p className="text-muted mt-2 mb-0 text-capitalize">
                                  {card.subtitle}
                                </p>
                                <p className="lead text-18 mt-2 mb-0 text-capitalize">
                                  {card.title}
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                    ))}

                    <div className="col-md-3">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h6 className="mb-2 text-muted">Jobs Progress</h6>
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
                      <div className="card mb-4">
                        <div className="card-body">
                          <h6 className="mb-2 text-muted">Tasks Progress</h6>
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
                <div className="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
                  <span>
                    Project Status:
                    <span className="font-weight-semibold">In Progress</span>
                  </span>

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
                          <i className="i-Medal-3"> </i> Assign Admin
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="i-Edit"> </i> Edit Project
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="i-Paint-Brush"> </i> Remove Project
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className="col-xl-3 ">
            <Accordion className="mb-3" defaultActiveKey="search">
              <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    className="cursor-pointer d-flex justify-content-between pr-3"
                    eventKey="search"
                >
                  <span>Search Project</span>
                  <span className=" dropdown-toggle"></span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="search">
                  <div className="card-body" id="custom-toggle">
                    <input
                        type="text"
                        placeholder="type  &  hit enter"
                        className="form-control"
                    />
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion className="mb-3" defaultActiveKey="navigation">
              <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    className="cursor-pointer d-flex justify-content-between pr-3"
                    eventKey="navigation"
                >
                  <span>Navigation</span>
                  <span className=" dropdown-toggle"></span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="navigation">
                  <div className="card-body" id="custom-toggle3">
                    <p className="card-text">Actions</p>

                    <div className="list-group">
                      <Link to="#" className="list-group-item list-group-item-action ">
                        <i className="i-Empty-Box"> </i> Create Project
                      </Link>
                      <Link to="#" className="list-group-item list-group-item-action">
                        <i className="i-Edit"> </i> Edit Project List
                      </Link>
                      <Link to="/tasks/create" className="list-group-item list-group-item-action">
                        <span className="custom-font">
                          <i className="i-Check"> </i>
                        </span>
                        Create Task
                      </Link>
                      <Link to="#" className="list-group-item list-group-item-action">
                        <i className="i-Gears"> </i> Settings
                      </Link>
                    </div>

                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion className="mb-3" defaultActiveKey="Completeness">
              <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    className="cursor-pointer d-flex justify-content-between pr-3"
                    eventKey="Completeness"
                >
                  <span>Completeness Stats</span>
                  <span className=" dropdown-toggle"></span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="Completeness">
                  <div className="card-body" id="custom-toggle6">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3">
                        <div className="d-flex align-items-center mb-1">
                          Blockers
                          <span className="text-muted ml-auto">50%</span>
                        </div>
                        <div
                            className="progress"
                            style={{ height: "0.125rem" }}
                        >
                          <div className="progress-bar bg-danger w-50">
                            <span className="sr-only">50% Complete</span>
                          </div>
                        </div>
                      </li>

                      <li className="mb-3">
                        <div className="d-flex align-items-center mb-1">
                          High priority
                          <span className="text-muted ml-auto">70%</span>
                        </div>
                        <div
                            className="progress"
                            style={{ height: "0.125rem" }}
                        >
                          <div
                              className="progress-bar bg-warning-400"
                              style={{ width: "70%" }}
                          >
                            <span className="sr-only">70% Complete</span>
                          </div>
                        </div>
                      </li>

                      <li className="mb-3">
                        <div className="d-flex align-items-center mb-1">
                          Normal priority
                          <span className="text-muted ml-auto">80%</span>
                        </div>
                        <div
                            className="progress"
                            style={{ height: "0.125rem" }}
                        >
                          <div
                              className="progress-bar bg-success-400"
                              style={{ width: "80%" }}
                          >
                            <span className="sr-only">80% Complete</span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="d-flex align-items-center mb-1">
                          Low priority
                          <span className="text-muted ml-auto">60%</span>
                        </div>
                        <div
                            className="progress"
                            style={{ height: "0.125rem" }}
                        >
                          <div
                              className="progress-bar bg-grey-400"
                              style={{ width: "60%" }}
                          >
                            <span className="sr-only">60% Complete</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>

      </div>
    );
  }
}

export default Project;
