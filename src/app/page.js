"use client"

import Image from "next/image";
import HeaderText from "./components/Elements/HeaderText";
import LabelBox from "./components/Fragments/HeaderMenu";
import SideBar from "./components/Layouts/SideBar";
import Main from "./components/Layouts/Main";
import InputForm from "./components/Fragments/HeaderInput";
import FormInput from "./components/Layouts/FormInput";
import { useState } from "react";

export default function Home() {
  const[isOpen,setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false)
  }
  const onOpen = () => {
    setIsOpen(true);
  }

  return (
    <main>
      <SideBar/>
      <FormInput 
        isOpen={isOpen}
        onClose={onClose}
      />
      <Main
        onOpen={onOpen}
      /> 
    </main>
  );
}
