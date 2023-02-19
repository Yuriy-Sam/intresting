import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Main = (props: Props) => {
  return (
    <Box component="main" sx={{ p: 3, textAlign: "center" }}>
      <Toolbar />
      <Typography variant="h5" color="GrayText">
        Головна
      </Typography>

      <Typography mt={5} variant="h3">
        Самойленко Юрій
      </Typography>

      <Typography mt={3} variant="subtitle1">
        Мені дуже сподобалося розробляти Ваше тестове завдання.
      </Typography>
      <Typography variant="subtitle1">
        Сподіваюся, що я зробив все правильно і що найближчим часом стану
        частиною Вашої команди.
      </Typography>
      <Typography variant="subtitle1">До зустрічі.</Typography>
    </Box>
  );
};

export default Main;
