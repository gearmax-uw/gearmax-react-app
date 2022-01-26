import { useForm, Controller } from "react-hook-form";
import "./styles.css";
import { SubmitHandler } from "react-hook-form";

// import { lazy } from "react";
import ReactDOM from "react-dom";
// import { useForm } from "react-hook-form";
// import { Checkbox, Input } from "@material-ui/core";
// import { useState } from "react";
// import ReactDOM from "react-dom";
// import Select from "react-select";
// import { Input as AntdInput } from "antd";
// import {Button,MenuItem, TextField, Select } from '@material-ui/core';

// interface IFormInput {
//   price: String;
//   // gender: GenderEnum;
// }

const Filter = props => {
// export default function Filter() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors }
  // } = useForm({
  //   defaultValues: {
  //     example: "",
  //     exampleRequired: ""
  //   }
    // const { register, handleSubmit } = useForm<IFormInput>();
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = (data: IFormInput) => console.log(data);
    const onSubmit = data => console.log(data);
  // console.log(errors);
  
    
  // });
    return (
        // <form
        // onSubmit={handleSubmit((data) => {
        //   alert(JSON.stringify(data));
        // })}
        // >
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Price</label>
        {/* <select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <select {...register("price")}>
          <option value="">Select...</option>
          <option value="A">10000-50000</option>
          <option value="B">50000-100000</option>
          <option value="B">{'>'}100000</option>
        </select>
        <label>Car Make</label>
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <select {...register("make")}>
          <option value="">Select...</option>
          <option value="A">Ford</option>
          <option value="B">BMW</option>
          <option value="B">Kia</option>
        </select>
        <label>Year</label>
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <select {...register("year")}>
          <option value="">Select...</option>
          <option value="A">2017</option>
          <option value="B">2018</option>
          <option value="B">2019</option>
        </select>
        <label>Distance</label>
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <select {...register("distance")}>
          <option value="">Select...</option>
          <option value="A">25 miles</option>
          <option value="B">50 miles</option>
          <option value="B">100 miles</option>
        </select>
        <label>Car Type</label>
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <select {...register("type")}>
          <option value="">Select...</option>
          <option value="A">SUV</option>
          <option value="B">Compact</option>
          <option value="B">Kia</option>
        </select>

        {/* <label>ExampleRequired</label>  */}
        {/* <input
          {...register("exampleRequired", { required: true, maxLength: 10 })}
        /> */}
        {/* {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <input type="submit" />
        </form>
    );
  };

  export default (Filter);
