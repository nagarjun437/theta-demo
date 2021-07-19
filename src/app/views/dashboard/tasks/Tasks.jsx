import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import LineChart4 from "app/views/charts/echarts/LineChart4";
import DoughnutChart from "app/views/charts/echarts/Doughnut";
import {Accordion, Card, Dropdown, ProgressBar, Table} from "react-bootstrap";
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

class Tasks extends Component {
  state = {
    notificationList: [
      {
        title: "Verify Site",
        text: "Verify Site Description ",
        date: "20 January, 2022"
      },
      {
        title: "Verify Quality",
        text: "Task Description details",
        date: "20 January, 2022            "
      },
      {
        title: "Task Name",
        text: "Task Description details",
        date: "20 January, 2022            "
      },
      {
        title: "Task Name",
        text: "Task Description details",
        date: "20 January, 2022            "
      },
      {
        title: "Task Name",
        text: "Task Description details",
        date: "20 January, 2022            "
      }
    ],
    itemPerPage: 6,
    currentPage: 0
  };

  handlePageClick = data => {
    let currentPage = data.selected;
    this.setState({ currentPage });
  };

  render() {
    let { notificationList, currentPage, itemPerPage } = this.state;
    return (
        <div>
          <Breadcrumb
              routeSegments={[
                { name: "Projects Dashboard", path: "/dashboard/project" },
                { name: "Jobs Dashboard", path: "/dashboard/jobs" },
                { name: "Tasks Dashboard" }
              ]}
          ></Breadcrumb>

          <div className="row mb-4">
            <div className="col-xl-10">
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
                          <i className="i-Bar-Chart-2 "></i> By Task status
                        </Link>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Show All</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item>Open</Dropdown.Item>
                        <Dropdown.Item>On hold</Dropdown.Item>
                        <Dropdown.Item>Approved</Dropdown.Item>
                        <Dropdown.Item>Closed</Dropdown.Item>
                        <Dropdown.Item>Rejected</Dropdown.Item>
                        <Dropdown.Item>Invalid</Dropdown.Item>
                        <Dropdown.Item>NA</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="nav-item mx-2">
                      <Dropdown.Toggle
                          as="span"
                          className="toggle-hidden cursor-pointer"
                      >
                        <Link className="navbar-nav-link" to="#">
                          <i className="i-Add-User "> </i> By Assigned Status
                        </Link>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Show All</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item>Assigned</Dropdown.Item>
                        <Dropdown.Item>Unassigned</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="nav-item mx-2">
                      <Dropdown.Toggle
                          as="span"
                          className="toggle-hidden cursor-pointer"
                      >
                        <Link className="navbar-nav-link" to="#">
                          <i className="i-Arrow-Turn-Right "></i> By Priority
                        </Link>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Show All</Dropdown.Item>
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
                        id="taskName"
                        placeholder="Task Name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-9">
              <div className="row">
                {notificationList
                    .slice(
                        currentPage * itemPerPage,
                        (currentPage + 1) * itemPerPage
                    )
                    .map((item, ind) => (
                        <div key={ind} className="col-xl-6">
                          <div className="card mb-4 card-gradient-inner-1">
                            <div className="card-body">
                              <div className="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                <div>
                                  <h6>
                                    <Link to="/tasks/edit">{item.title}</Link>
                                  </h6>
                                  <p className="ul-task-manager__paragraph mb-3">
                                    {item.text}
                                  </p>

                                  <Link to="#">
                                    <img
                                        src="/assets/images/faces/1.jpg"
                                        className="rounded-circle"
                                        width="36"
                                        height="36"
                                        alt="corrupted"
                                    />
                                  </Link>
                                  <Link to="#">
                                    <img
                                        src="/assets/images/faces/2.jpg"
                                        className="rounded-circle"
                                        width="36"
                                        height="36"
                                        alt="corrupted 2"
                                    />
                                  </Link>
                                  <Link to="#">
                                    <i className="ml-1 ul-task-manager__fonts i-Add text-32 align-middle"></i>
                                  </Link>
                                </div>

                                <ul className="list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto">
                                  <li>
                                    <small className="ul-task-manager__font-date text-muted">
                                      {item.date}
                                    </small>
                                  </li>
                                  <Dropdown className="list-inline-item my-1">
                                    <Dropdown.Toggle
                                        as="span"
                                        className="toggle-hidden cursor-pointer d-flex flex-wrap align-items-center"
                                    >
                                      <span>Priority: &nbsp;</span>
                                      <Link
                                          className="badge badge-danger align-top dropdown-toggle"
                                          data-toggle="dropdown"
                                          to="#"
                                      >
                                        Blocker
                                      </Link>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item>
                                        <span className="badge badge-mark mr-2 border-danger"></span>
                                        Blocker
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        <span className="badge badge-mark mr-2 border-warning-400"></span>
                                        High priority
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        <span className="badge badge-mark mr-2 border-success"></span>
                                        Normal priority
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        <span className="badge badge-mark mr-2 border-grey-300"></span>
                                        Low priority
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <li>
                                    <span>Job: &nbsp;</span><Link to="#">Job Name</Link>
                                  </li>
                                  <li>
                                    <span>Category: &nbsp;</span><Link to="#">Surveyor</Link>
                                  </li>
                                  <li>
                                    <span>Phase: &nbsp;</span><Link to="#">Design</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
                              <span>
                                Due:
                                <span className="font-weight-semibold">18 hours</span>
                              </span>

                              <ul className="list-inline mb-0 mt-2 mt-sm-0">
                                <Dropdown className="list-inline-item">
                                  <Dropdown.Toggle
                                      as="span"
                                      className="toggle-hidden cursor-pointer"
                                  >
                                    In Progress
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item>In Progress</Dropdown.Item>
                                    <Dropdown.Item>On hold</Dropdown.Item>
                                    <Dropdown.Item>Approved</Dropdown.Item>
                                    <Dropdown.Item>Rejected</Dropdown.Item>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Dropdown.Item>Closed</Dropdown.Item>
                                    <Dropdown.Item>Invalid</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="list-inline-item">
                                  <Dropdown.Toggle
                                      as="span"
                                      className="toggle-hidden cursor-pointer"
                                  >
                                    <i className="i-Gear-2"> </i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item>
                                      <Link to="/tasks/upload"> <i className="i-Favorite-Window"> </i> Attach
                                        screenshot</Link>

                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                      <Link to="/tasks/edit"> <i className="i-Edit"> </i> Edit Task Details</Link>
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </ul>
                            </div>
                          </div>
                        </div>
                    ))}
              </div>

              {/* <!-- pagination --> */}
              <div className="row justify-content-center mt-4">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(notificationList.length / itemPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={itemPerPage}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination pagination-lg"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
              </div>
            </div>

            <div className="col-xl-3 ">

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
                        <Link to="/tasks/create" className="list-group-item list-group-item-action">
                        <span className="custom-font">
                          <i className="i-Add-Window"> </i>
                        </span>
                          Create Task
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action">
                          <i className="i-Edit"> </i> Edit Task List
                        </Link>
                      </div>
                      <div className="mb-4"></div>

                      <p className="card-text">Tasks</p>

                      <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action">
                        <span className="custom-font">
                          <i className="i-Folders"> </i>
                        </span>
                          All Tasks
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action ">
                          <i className="i-Add-File"> </i> Active Tasks
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action">
                          <i className="i-Close-Window"> </i> Closed Tasks
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action">
                          <i className="i-Administrator"> </i> Assigned To Me
                          <span className="badge badge-primary badge-pill ml-4">
                          14
                        </span>
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action">
                          <i className="i-Conference"> </i> Assigned To My Team
                          <span className="badge badge-primary badge-pill ml-4">
                          14
                        </span>
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

export default Tasks;
