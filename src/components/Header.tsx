import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/decani-white.svg";
import Menu from "./Menu";
import { useState } from "react";
export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toogleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const menuItems = ["Home", "Services", "About", "Contact Us"];
  const DrawerList = (
    <Box>
      <List>
        {menuItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
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
        <Button>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
}
