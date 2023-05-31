import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExerciseCard from "./ExerciseCard";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@emotion/react";
import AppBar from "@mui/material/AppBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function ExercisePlan({ plan, days }) {

  console.log(plan)
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const tabPanelStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    overflowY: "scroll",
    height: "575px",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", margin: "0 35px" }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Exercise
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Plan
        </span>
        
      </Typography>
      <AppBar
        style={{ backgroundColor: "rgb(0 0 0 / 5%)", color: "black" }}
        position="static"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {days?.map((day, i) => (
            <Tab label={day} key={day} {...a11yProps(i)} />
          ))}

          {/* <Tab label="Monday" {...a11yProps(0)} />
          <Tab label="Tuesday" {...a11yProps(1)} />
          <Tab label="Wednesday" {...a11yProps(2)} />
          <Tab label="Thursday" {...a11yProps(3)} />
          <Tab label="Friday" {...a11yProps(4)} />
          <Tab label="Saturday" {...a11yProps(5)} />
          <Tab label="Sunday" {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <div style={tabPanelStyle}>
            {plan?.Monday?.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div style={tabPanelStyle}>
            {plan?.Tuesday?.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div style={tabPanelStyle}>
            {plan?.Wednesday?.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div style={tabPanelStyle}>
            {plan?.Thursday?.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div style={tabPanelStyle}>
            {plan?.Friday?.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div style={tabPanelStyle}>
            {plan?.Saturday?.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <div style={tabPanelStyle}>
            {plan?.Sunday?.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
