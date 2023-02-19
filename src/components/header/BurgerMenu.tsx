import { Box, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
interface Props {
  window?: () => Window;
}

const BurgerMenu = (props: Props) => {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (arr: object[]) => (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {arr.map((item: any) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
            >
              <NavLink
                end
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "#000",
                })}
                to={item.link}
              >
                {item.name}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      {/* {drawer(props.navItems)} */}
    </Drawer>
  );
};

export default BurgerMenu;
