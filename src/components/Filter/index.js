import { useForm, Controller } from "react-hook-form";
import "./styles.css";
import React from "react";
import axios from 'axios';
import Select from 'react-select'
import Box from '@mui/material/Box';
import { Slider } from "@material-ui/core";
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

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    marginBottom: '20px',
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: '40px',
    padding: '0 6px'
  }),

  input: (provided, state) => ({
    ...provided,
  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
  }),

}



const bodyoption = [
  { value: 'suv-crossover', label: 'suv-crossover' },
  { value: 'coupe', label: 'coupe' },
  { value: 'pickup-truck', label: 'pickup-truck' },
  { value: 'sedan', label: 'sedan' },
  { value: 'hatchback', label: 'hatchback' },
  { value: 'wagon', label: 'wagon' },
  { value: 'minivan', label: 'minivan' },
  { value: 'van', label: 'van' },
  { value: 'convertible', label: 'convertible' },
]

const makeoption = [
  { value: 'chrysler',label: 'chrysler' },
  { value: 'dodge',label: 'dodge' },
  { value: 'mercedes-benz',label: 'mercedes-benz' },
  { value: 'nissan',label: 'nissan' },
  // { value: 'hatchback', label: 'hatchback' },
  // { value: 'wagon', label: 'wagon' },
  // { value: 'minivan', label: 'minivan' },
  // { value: 'van', label: 'van' },
  // { value: 'convertible', label: 'convertible' },
]

const coloroption = [
  { value: 'blue',label: 'blue' },
  { value: 'red',label: 'red' },
  { value: 'black',label: 'black' },
  { value: 'silver',label: 'silver' },
  { value: 'white',label: 'white' },
  { value: 'green',label: 'green' },
  { value: 'yellow',label: 'yellow' },
  { value: 'brown',label: 'brown' },

]
function valuetext(value) {
  return `${value}°C`;
}

const Filter = (props) => {
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
    // const [options, setOptions] = React.useState(option);
    const { register, control, setValue, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = (data: IFormInput) => console.log(data);
    // const [value, setValue] = React.useState([0, 10000]);

    const onSubmit = data => console.log(data);
    const handleChange_body = (change) => {
      setValue("body", change, {
        shouldDirty: true
      });
    };
    const handleChange_make = (change) => {
      setValue("make", change, {
          shouldDirty: true
        });
      };
    const handleChange_color = (change) => {
      setValue("color", change, {
            shouldDirty: true
          });  
    };


  const handleChange_range = (event, newValue) => {
    setValue(newValue);
  };
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
        <input {...register("price_low")} placeholder="From" />
        <input {...register("price_high")} placeholder="To" />
        {/* <select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        {/* <select {...register("price")}>
          <option value="">Select...</option>
          <option value="A">10000-50000</option>
          <option value="B">50000-100000</option>
          <option value="B">{'>'}100000</option>
        </select> */}
      

        <label>Year</label>
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <input {...register("year_low")} placeholder="From" />
        <input {...register("year_high")} placeholder="To" />


        {/* <Box sx={{ width: 300 }}>
        <Slider
  // aria-label="Temperature range"
  defaultValue={5000}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  aria-labelledby="range-slider"
  step={1000}
  // marks
  min={0}
  max={100000}
/>
</Box> */}

        <label> Mileage &#8804;</label>
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <input {...register("mileage")} placeholder="Less than" />

        <label> Seating &#8804;</label>
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <input {...register("seating")} placeholder="Less than" />

        <label>Exterior Color</label>
        {/* <div id ="s"> */}
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <Controller 
          name="color"
          control={control}
          render={() => (
            <Select
              options={coloroption}
              defaultValue={coloroption[1]}
              onChange={handleChange_color}
              styles={customStyles}
            />
          )}
        />

        <label>City</label>
        <input {...register("city")} placeholder="City" />
        {/* <label>Distance</label>
       
        <select {...register("distance")}>
          <option value="">Select...</option>
          <option value="A">25 miles</option>
          <option value="B">50 miles</option>
          <option value="B">100 miles</option>
        </select> */}
        <label>Body Type</label>
        {/* <div id ="s"> */}
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <Controller 
          name="body"
          control={control}
          render={() => (
            <Select
              options={bodyoption}
              defaultValue={bodyoption[1]}
              onChange={handleChange_body}
              styles={customStyles}
            />
          )}
        />
        {/* </div> */}
        <label>Car Make</label>
   
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        {/* <select {...register("make")}>
          <option value="">Select...</option>
          <option value="A">Ford</option>
          <option value="B">BMW</option>
          <option value="B">Kia</option>
        </select> */}
         <Controller
          name="make"
          control={control}
          render={() => (
            <Select
              options={makeoption}
              defaultValue={makeoption[1]}
              onChange={handleChange_make}
              styles={customStyles}
            />
          )}
        />
        {/* <Select  
        name="controlledSelect"
        control={control}
        options={options} 
        {...register("type")} 
        onChange={handleChange} >
        <option value="">Select...</option>
          <option value="A">25 miles</option>
          <option value="B">50 miles</option>
          <option value="B">100 miles</option>
        </Select> */}

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
