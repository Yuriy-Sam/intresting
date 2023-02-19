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
      <Box textAlign="center">
        <Typography mb={5} variant="h5" color="GrayText">
          Профіль
        </Typography>
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
