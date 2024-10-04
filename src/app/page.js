"use client"

import Image from "next/image";
import HeaderText from "./components/Elements/HeaderText";
import LabelBox from "./components/Fragments/HeaderMenu";
import SideBar from "./components/Layouts/SideBar";
import Main from "./components/Layouts/Main";
import InputForm from "./components/Fragments/InputFragment/HeaderInput";
import FormInput from "./components/Layouts/FormInput";
import { useEffect, useState } from "react";
import Todos from "@/lib/fetch/todos";

export default function Home() {
  const [isOpenForm,setIsOpenForm] = useState(false);
  const [isOpenSide,setIsOpenSide] = useState(false);
  const [rotateIndex,setRotateIndex] = useState([]);
  const [todos,setTodos] = useState([]);
  const [newTodo,setNewTodo] = useState({});

  const fetchTodo = async() => {
    const data = await Todos.getAll(1);
    setTodos(data.data);
  }

  useEffect(() => {
    fetchTodo()
  },[isOpenForm])

  const onClose = () => {
    setIsOpenForm(false)
  }
  const onOpenForm = () => {
    setIsOpenForm(state => !state)

  }
  const onOpenSide = () => {
    setIsOpenSide(state => !state);
  }

  const onRotate = (idx) => {
    if(rotateIndex.includes(idx)) {
      setRotateIndex(rotateIndex.filter((val) => val !== idx));
    } else {
      setRotateIndex([...rotateIndex,idx])
    }
  }

  return (
    <main>
      <SideBar
        onOpenSide={onOpenSide}
        isOpen={isOpenSide}
      />
      <FormInput 
        isOpen={isOpenForm}
        onClose={onClose}
      />
      <Main
        onOpenForm={onOpenForm}
        onOpenSide={onOpenSide}
        isOpenForm={isOpenForm}
        isOpenSide={isOpenSide}
        onRotate={onRotate}
        todos={todos}
        rotateIndex={rotateIndex}
      /> 
    </main>
  );
}
