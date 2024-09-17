import Image from "next/image";
import HeaderText from "./components/Elements/HeaderText";
import LabelBox from "./components/Fragments/HeaderMenu";
import SideBar from "./components/Layouts/SideBar";
import Main from "./components/Layouts/Main";
import InputForm from "./components/Fragments/HeaderInput";
import FormInput from "./components/Layouts/FormInput";

export default function Home() {
  return (
    <main>
      <SideBar/>
      <FormInput/>
      <Main/> 
    </main>
  );
}
