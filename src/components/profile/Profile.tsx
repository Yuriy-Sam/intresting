import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  const handleLogout = () => {
    localStorage.setItem("auth", JSON.stringify(false));
    window.location.href = "/auth";
  };
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Box>
        <Typography>Profile</Typography>
        <Button
          onClick={() => handleLogout()}
          variant="contained"
          color="error"
        >
          Log out
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
