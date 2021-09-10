import React, { Component } from "react";
import Select from "react-select";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import options from "./Options";
import frequency from "./Frequency";
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
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

  render() {
    return (
        //JSS
        <><div>
            <h1 style="color: white;">Please select the services that you would like to receive announcements about them</h1>
        </div><>
        <><Select
            styles={styles}
            closeMenuOnSelect={false}
            isMulti
            options={options}
            defaultValue={options[0]} />
        </><><Select
            styles={styles}
            closeMenuOnSelect={false}
            options={frequency}
            defaultValue={frequency[0]} />
                    <Button color="secondary"
                        variant="contained"
                        onClick={this.back}
                    >Back</Button>
                    <Button color="primary"
                        variant="contained"
                        onClick={this.continue}
                    >Continue</Button>
                </></></>
    )
  }
}

export default Services;