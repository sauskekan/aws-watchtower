import React, { Component } from "react";
import Select from "react-select";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import options from "./Options";
import "./App.css";

const styles = {
  multiValue: styles => {
    return {
      ...styles,
      backgroundColor: "papayawhip"
    };
  }
};
class Services extends Component {
  render() {
    return (
      <Select
        styles={styles}
        closeMenuOnSelect={false}
        isMulti
        options={options}
        defaultValue={options[0]}
      />
    );
  }
}

export default Services;