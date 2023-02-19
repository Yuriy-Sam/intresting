import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";

function Login() {
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserError("");
    setPassError("");
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    console.log(window.location.origin + window.location.pathname + "/profile");
    if (username === "admin" && password === "12345") {
      localStorage.setItem("auth", JSON.stringify(true));
      // window.location.hash = "";
      window.location.href = "/profile";
    } else {
      if (username !== "admin")
        setUserError("Ім'я користувача введено неправильно.");
      if (password !== "12345") setPassError("Пароль введено неправильно.");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: 10,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Авторизація
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            error={userError.length > 0}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="text"
            autoFocus
            helperText={userError}
            aria-errormessage="Ім'я користувача введено неправильно."
          />
          <TextField
            error={passError.length > 0}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={passError}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Авторизація
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Login;
