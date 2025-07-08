import { Button } from "@mui/material";
import logo from "../assets/images/decani-white.svg";
import Menu from "./Menu";
export default function Header() {
  return (
    <nav className="w-full bg-pyellow h-20 items-center flex gap-96">
      <img src={logo} alt="logo" className="w-40 h-12 ml-28" />
      <div className="flex items-center gap-10">
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
      </div>
    </nav>
  );
}
