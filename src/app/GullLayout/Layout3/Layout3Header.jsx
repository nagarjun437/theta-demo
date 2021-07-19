import React, { Component, Fragment } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import { getTimeDifference, classList } from "@utils";
import DropdownToggle from "react-bootstrap/DropdownToggle";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { withRouter, Link } from "react-router-dom";

import { merge } from "lodash";
import { navigations } from "app/navigations";
import ScrollBar from "react-perfect-scrollbar";
import MegaMenu from "@gull/components/MegaMenu";
import localStorageService from "../../services/localStorageService";

class Layout3Header extends Component {
  state = {
      shorcutMenuList: [
        {
          icon: "i-Shop-4",
          link: "#",
          text: "Home"
        },
        {
          icon: "i-Library",
          link: "#",
          text: "Dashboard"
        },
        {
          icon: "i-File-Clipboard-File--Text",
          link: "#",
          text: "Form"
        },
        {
          icon: "i-Checked-User",
          link: "#",
          text: "Sessions"
        },
        {
          icon: "i-Ambulance",
          link: "#",
          text: "Support"
        }
      ],
      notificationList: [
        {
          icon: "i-Speach-Bubble-6",
          title: "New message",
          description: "Ed: Hey! are you busy?",
          time: "2021-07-11T02:10:18.931Z",
          color: "primary",
          status: "New"
        },
        {
          icon: "i-Receipt-3",
          title: "New Image(s) Uploaded",
          description: "Task Name ",
          time: "2021-07-11T02:10:18.931Z",
          color: "success",
          status: "3"
        },
        {
          icon: "i-Empty-Box",
          title: "New Task Created",
          description: "Task Description",
          time: "2021-07-11T02:10:18.931Z",
          color: "danger",
          status: "New"
        },
        {
          icon: "i-Data-Power",
          title: "New Image(s) Uploaded",
          description: "Job Name ",
          time: "2021-07-11T02:10:18.931Z",
          color: "success",
          status: "5"
        }
      ],
      showSearchBox: false
    };

  handleMenuClick = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout3Settings: {
          leftSidebar: {
            open: !settings.layout3Settings.leftSidebar.open
          }
        }
      })
    );
  };

  toggleFullScreen = () => {
    if (document.fullscreenEnabled) {
      if (!document.fullscreen) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  };

  handleSearchBoxOpen = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout3Settings: {
          searchBox: {
            open: true
          }
        }
      })
    );
  };

  render() {
    let { shorcutMenuList = [], notificationList = [] } = this.state;
    let { settings } = this.props;

    return (
      <Fragment>
        <div className="main-header">
          <div className="logo">
            <img src="/assets/images/logo.png" alt="" onClick={this.handleMenuClick} />
          </div>

          <div className="horizontal-bar-wrap">
            <div
              className={classList({
                "header-topnav": true,
                open: settings.layout3Settings.leftSidebar.open
              })}
            >
              <div className="container-fluid">
                <ScrollBar className="topnav position-relative rtl-ps-none">
                  <ul className="menu float-left">
                    {navigations.map((parent, index) => {
                        const user = localStorageService.getItem("auth_user");
                        if(user && parent.auth.includes(user.role)) {
                            return (
                             <li key={index}>
                                <div>
                                  <div>
                                    <label className="toggle" htmlFor={`drop-${index}`}>
                                      {parent.name}
                                    </label>
                                    <Link to={!parent.sub ? parent.path : "#"}>
                                      <i className={`nav-icon mr-2 ${parent.icon}`}></i>
                                      {parent.name}
                                    </Link>
                                    <input type="checkbox" id={`drop-${index}`} />
                                    <ul>
                                      {parent.sub &&
                                        parent.sub.map((child, i) => (
                                          <li key={i}>
                                            <Link to={child.path || "#"}>
                                              <i
                                                className={`nav-icon mr-2 ${child.icon}`}
                                              ></i>
                                              <span className="item-name">
                                                {child.name}
                                              </span>
                                            </Link>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                </div>
                             </li>
                           )
                      }
                    })}
                  </ul>
                </ScrollBar>
              </div>
            </div>
          </div>

          <div style={{ margin: "auto" }}></div>

          <div className="header-part-right">
             <i
                 className="i-Full-Screen header-icon d-none d-sm-inline-block"
                 data-fullscreen
                 onClick={this.toggleFullScreen}
             ></i>

             <Dropdown>
               <Dropdown.Toggle as="span" className="toggle-hidden cursor-pointer">
                 <div
                     className="badge-top-container"
                     role="button"
                     id="dropdownNotification"
                     data-toggle="dropdown"
                 >
                   <span className="badge badge-primary">3</span>
                   <i className="i-Bell text-muted header-icon"></i>
                 </div>
               </Dropdown.Toggle>

               <DropdownMenu className="notification-dropdown rtl-ps-none">
                 {notificationList.map((note, index) => (
                     <div key={index} className="dropdown-item d-flex">
                       <div className="notification-icon">
                         <i className={`${note.icon} text-${note.color} mr-1`}></i>
                       </div>
                       <div className="notification-details flex-grow-1">
                         <p className="m-0 d-flex align-items-center">
                           <span>{note.title}</span>
                           <span
                               className={`badge badge-pill badge-${note.color} ml-1 mr-1`}
                           >
                       {note.status}
                     </span>
                           <span className="flex-grow-1"></span>
                           <span className="text-small text-muted ml-auto">
                       {getTimeDifference(new Date(note.time))} ago
                     </span>
                         </p>
                         <p className="text-small text-muted m-0">
                           {note.description}
                         </p>
                       </div>
                     </div>
                 ))}
               </DropdownMenu>
             </Dropdown>

             <div className="user col align-self-end">
               <Dropdown>
                 <DropdownToggle
                     as="span"
                     className="toggle-hidden cursor-pointer"
                 >
                   <img
                       src={localStorageService.getItem("auth_user").photoURL}
                       id="userDropdown"
                       alt=""
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false"
                   />
                 </DropdownToggle>
                 <DropdownMenu>
                   <div className="dropdown-header">
                     <i className="i-Lock-User mr-1"></i>
                     {localStorageService.getItem("auth_user").displayName}
                   </div>
                   <Link to="/" className="dropdown-item cursor-pointer">
                     Account settings
                   </Link>
                   <Link to="/" className="dropdown-item cursor-pointer">
                     Billing history
                   </Link>
                   <Link
                       to="/session/signin"
                       className="dropdown-item cursor-pointer"
                       onClick={this.props.logoutUser}
                   >
                     Sign out
                   </Link>
                 </DropdownMenu>
               </Dropdown>
             </div>
           </div>
        </div>


      </Fragment>
    );
  }
}

Layout3Header.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings
  })(Layout3Header)
);
