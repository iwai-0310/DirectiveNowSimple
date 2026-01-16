import { Button } from "./ui/button";
import { Popover, PopoverButton } from "@headlessui/react";
import Link from "next/link";
export default function Header() {
  return (
    //space indigo #22223B
    //Parchment #F2E9E4
    <header className="bg-gradient-to-b from-[#22223B] to-[#030617]"
      style={{
        padding: "1rem",
        backgroundColor: "#22223B",
        color: "#F2E9E4",
        position: "fixed",
        left:0 ,top: 0,
        width: "100vw",
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
        zIndex: 1000, 
        }}>
        {/* Logo div aligned left */}
        <Link href="/" className="inline-block">
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          DirectiveNow
        </div>
        </Link>
        {/* Buttons container aligned right */}
        <Popover>
        <div className={{ right:0, display: "flex", gap: "2", position: "right", justifyContent: "center", width: "100%" }}>
          <Link href="/services" className="inline-block">
          <Button  variant="ghost" size="sm">Services</Button>
          </Link>
          <Link href="/aboutUs" className="inline-block">
          <Button variant="ghost" size="sm">About Us</Button>
          </Link>
          <Button variant="ghost" size="sm">Industries</Button>
          <Button variant="ghost" size="sm">Connect us</Button>
          <Button variant="secondary" size="sm">Get a Free Audit</Button>
        </div>
        {/* Popover Panel for mobile menu can be added here if needed */}
        {/* <div className="flex grow items-center justify-end ">
          <PopoverButton size="sm">
            Menu
          </PopoverButton>
        </div> */}
        </Popover>
    </header>
  );
}