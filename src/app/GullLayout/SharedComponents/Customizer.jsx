import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { merge } from "lodash";
import {
  setLayoutSettings,
  setDefaultSettings
} from "app/redux/actions/LayoutActions";
import { classList } from "@utils";
import ScrollBar from "react-perfect-scrollbar";
import {Link} from "react-router-dom";
import localStorageService from "../../services/localStorageService";
import {authRoles} from "../../auth/authRoles";
import {Accordion, Button, Card, Dropdown, OverlayTrigger, ProgressBar, Table, Tooltip} from "react-bootstrap";

class Customizer extends Component {
  state = {};

  sidebarColors = [
    {
      name: "gradient-purple-indigo"
    },
    {
      name: "gradient-black-blue"
    },
    {
      name: "gradient-black-gray"
    },
    {
      name: "gradient-steel-gray"
    },
    {
      name: "dark-purple"
    },
    {
      name: "slate-gray"
    },
    {
      name: "midnight-blue"
    },
    {
      name: "blue"
    },
    {
      name: "indigo"
    },
    {
      name: "pink"
    },
    {
      name: "red"
    },
    {
      name: "purple"
    }
  ];

  handleLayoutChange = layoutName => {
    let { settings, setLayoutSettings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        activeLayout: layoutName
      })
    );
  };

  handleCustomizerToggle = () => {
    let { settings, setLayoutSettings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        customizer: {
          open: !settings.customizer.open
        }
      })
    );
  };
  handleDirectionChange = event => {
    let { settings, setLayoutSettings } = this.props;
    let dir = settings.dir === "rtl" ? "ltr" : "rtl";
    document.documentElement.setAttribute("dir", dir);
    setLayoutSettings(
      merge({}, settings, {
        dir: dir
      })
    );
  };
  changeSidebarColor = colorClass => {
    let { settings, setLayoutSettings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout2Settings: {
          leftSidebar: {
            theme: colorClass
          }
        }
      })
    );
  };

  render() {
    let { settings } = this.props;
    let { activeLayout } = settings;

    return (
      <div
        id="customizer"
        className={classList({
          customizer: true,
          open: settings.customizer.open
        })}
      >
        <div className="handle" onClick={this.handleCustomizerToggle}>
          <i className="i-Gear spin"></i>
        </div>
        <ScrollBar
          className="customizer-body"
          data-perfect-scrollbar
          data-suppress-scroll-x="true"
        >
          <div className="accordion" id="accordionCustomizer">
            <div className="card">
              <div className="card-header" id="headingOne">
                <p className="mb-0">Project Actions</p>
              </div>
              <div
                  id="collapseTwo"
                  className="collapse show"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionCustomizer"
              >
                <div>
                   <Dropdown.Item>
                    <Link to="/project/create"><i className="i-Network-Window" > </i> Create New Project </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/tasks/create"><i className="i-Check" > </i> Create New Task </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="#"><i className="i-Paint-Brush" > </i> Actions</Link>
                  </Dropdown.Item>

                </div>
              </div>
            </div>
          </div>
        </ScrollBar>
      </div>
    );
  }
}

Customizer.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  settings: state.layout.settings
});

export default connect(mapStateToProps, {
  setLayoutSettings,
  setDefaultSettings
})(Customizer);
