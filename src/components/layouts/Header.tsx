import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/decani-white.svg";
import Menu from "./Menu";
import { useState } from "react";
import { ChevronLeft } from "@mui/icons-material";
export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toogleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const menuItems = ["Home", "Services", "About", "Contact Us"];
  const DrawerList = (
    <Box
      sx={{
        background: "#F4A950",
        height: "100vh",
        width: "100%",
      }}
    >
      <Button
        onClick={toogleDrawer(false)}
        sx={{ width: "20px", height: "50px", padding: "0px" }}
        endIcon={
          <ChevronLeft sx={{ color: "black", width: "50px", height: "30px" }} />
        }
      ></Button>

      <List>
        {menuItems.map((text) => (
          <ListItem key={text} className="font-bold" disablePadding>
            <ListItemButton className="bg-red-300">
              <ListItemText
                primary={text}
                slotProps={{
                  primary: {
                    sx: {
                      color: "white",
                      textAlign: "left",
                      fontWeight: "bold",
                      fontFamily: "Open-sans",
                      fontSize: 20,
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <nav className="w-full bg-pyellow gap-[30rem] [@media(max-width:853px)]:gap-[8rem] [@media(max-width:1024px)]:gap-[20rem] md:gap-[20rem] h-16 items-center flex">
      <img
        src={logo}
        alt="logo"
        className="w-24 h-12 ml-28 md:ml-10 [@media(max-width:540px)]:ml-5"
      />

      {/* Desktop Menu */}
      <div className="flex items-center [@media(max-width:540px)]:hidden gap-10 w-full">
        <Menu />
        <Button
          sx={{
            border: "1x solid white",
            backgroundColor: "black",
            color: "white",
            padding: "5px",
            borderRadius: "0px",
            width: "172px",
          }}
        >
          Sign Up
        </Button>
        {/* Mobile devices menu */}
      </div>
      <div className="absolute right-0 hidden [@media(max-width:540px)]:block">
        <Button onClick={toogleDrawer(true)} endIcon={<MenuIcon />}></Button>
        <Drawer
          open={drawerOpen}
          anchor="top"
          onClose={toogleDrawer(false)}
          sx={{
            opacity: "95%",
          }}
        >
          {DrawerList}
        </Drawer>
      </div>
    </nav>
  );
}
