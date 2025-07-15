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

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const menuItems = ["Home", "Services", "About", "Contact Us"];
  const DrawerList = (
    <Box
      sx={{
        background: "#F4A950",
        height: "fit-content",
        width: "100%",
        paddingBottom: "20px",
        boxShadow: "5px 5px 10px",
      }}
    >
      <Button
        onClick={toggleDrawer(false)}
        sx={{ 
          width: "20px", 
          height: "50px", 
          padding: "0px", 
        }}
        endIcon={
          <ChevronLeft sx={{ 
            color: "white", 
            width: "50px",
            height: "40px", 
            paddingTop: "10px" 
          }} />
        }
      ></Button>

      <List>
        {menuItems.map((text) => (
          <ListItem key={text} className="font-bold pl-5" disablePadding>
            <ListItemButton className="bg-red-300">
              <ListItemText
                primary={text}
                slotProps={{
                  primary: {
                    sx: {
                      color: "white",
                      textAlign: "left",
                      fontWeight: "sans-serif",
                      fontFamily: "",
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
    <nav className="w-full bg-pyellow flex items-center justify-center ">
      <div className="flex flex-row w-full gap-[30rem] [@media(max-width:853px)]:gap-[8rem] [@media(max-width:1024px)]:gap-[20rem] md:gap-[20rem] h-16 items-center  justify-between xl:max-w-[1440px] md:pr-16">
        <div>
          <img 
            src={logo}
            alt="logo"
            className="w-24 h-12 ml-5 lg:ml-16 [@media(max-width:540px)]:ml-5"
          />
        </div>
        

        {/* Desktop Menu */}
        <div className="w-full ">
          <div className="items-center hidden lg:visible md:flex gap-10 w-full md:justify-end">
            <Menu />
            {/* <Button
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
            </Button> */}
            {/* Mobile devices menu */}
          </div>
        </div>
        <div className="absolute right-0 md:hidden mr-4">
          <Button 
          onClick={toggleDrawer(true)} 
          endIcon={<MenuIcon className="text-white" />}
          ></Button>
          <Drawer
            open={drawerOpen}
            anchor="top"
            onClose={toggleDrawer(false)}
            sx={{
              opacity: "100%",
            }}
          >
            {DrawerList}
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
