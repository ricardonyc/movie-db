import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SearchIcon from "@mui/icons-material/Search";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvIcon from "@mui/icons-material/Tv";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const styling = {
    color: "#0e3356",
    background: "#62ee81",
  };

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Movies"
          icon={<LocalMoviesIcon />}
          style={styling}
        />
        <BottomNavigationAction
          label="TV Shows"
          icon={<TvIcon />}
          style={styling}
        />
        <BottomNavigationAction
          label="Trending"
          icon={<TrendingUpIcon />}
          style={styling}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          style={styling}
        />
      </BottomNavigation>
    </Box>
  );
}
