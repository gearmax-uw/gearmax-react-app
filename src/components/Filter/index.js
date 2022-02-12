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
import { amber } from "@mui/material/colors";
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
  { value: 'suv-crossover', label: 'SUV Crossover' },
  { value: 'coupe', label: 'Coupe' },
  { value: 'pickup-truck', label: 'Pickup Truck' },
  { value: 'sedan', label: 'Sedan' },
  { value: 'hatchback', label: 'Hatchback' },
  { value: 'wagon', label: 'Wagon' },
  { value: 'minivan', label: 'Minivan' },
  { value: 'van', label: 'Van' },
  { value: 'convertible', label: 'Convertible' },
  { value: '', label: ''}
]

const makeoption = [
  { value: 'ford',label: 'Ford' },
  { value: 'chevrolet',label: 'Chevrolet' },
  { value: 'toyota',label: 'Toyota' },
  { value: 'nissan',label: 'Nissan' },
  { value: 'jeep',label: 'Jeep' },
  { value: 'hyundai',label: 'Hyundai' },
  { value: 'kia',label: 'Kia' },
  { value: 'ram',label: 'Ram' },
  { value: 'gmc',label: 'GMC' },
  { value: 'dodge',label: 'Dodge' },
  { value: 'volkswagen',label: 'Volkswagen' },
  { value: 'subaru',label: 'Subaru' },
  { value: 'mercedes-benz',label: 'Mercedes Benz' },
  { value: 'buick',label: 'Buick' },
  { value: 'bmw',label: 'BMW' },
  { value: 'mazda',label: 'Mazda' },
  { value: 'cadillac',label: 'Cadillac' },
  { value: 'lexus',label: 'Lexus' },
  { value: 'chrysler',label: 'Chrysler' },
  { value: 'audi',label: 'Audi' },
  { value: 'lincoln',label: 'Lincoln' },
  { value: 'acura',label: 'Acura' },
  { value: 'infiniti',label: 'Infiniti' },
  { value: 'volvo',label: 'Volvo' },
  { value: 'mitsubishi',label: 'Mitsubishi' },
  { value: 'land-rover',label: 'Land Rover' },
  { value: 'porsche',label: 'Porsche' },
  { value: 'mini',label: 'Mini' },
  { value: 'jaguar',label: 'Jaguar' },
  { value: 'alfa-romeo',label: 'Alfa Romeo' },
  { value: 'genesis',label: 'Genesis' },
  { value: 'maserati',label: 'Maserati' },
  { value: 'fiat',label: 'Fiat' },
  { value: 'pontiac',label: 'Pontiac' },
  { value: 'scion',label: 'Scion' },
  { value: 'tesla',label: 'Tesla' },
  { value: 'mercury',label: 'Mercury' },
  { value: 'saturn',label: 'Saturn' },
  { value: 'ferrari',label: 'Ferrari' },
  { value: '', label: ''}
]

const coloroption = [
  { value: 'blue',label: 'Blue' },
  { value: 'red',label: 'Red' },
  { value: 'black',label: 'Black' },
  { value: 'silver',label: 'Silver' },
  { value: 'white',label: 'White' },
  { value: 'green',label: 'Green' },
  { value: 'yellow',label: 'Yellow' },
  { value: 'brown',label: 'Brown' },
  { value: 'gold',label: 'Gold' },
  { value: 'gray',label: 'Gray' },
  { value: 'orange',label: 'Orange' },
  { value: 'pink',label: 'Pink' },
  { value: 'purple',label: 'Purple' },
  { value: 'teal',label: 'Teal' },
  { value: '', label: '' }
]

const transmissionoption = [
  { value: 'automatic',label: 'Automatic' },
  { value: 'continuously-variable-transmission',label: 'Continuously Variable Transmission' },
  { value: '6-speed-automatic',label: '6 Speed Automatic' },
  { value: '8-speed-automatic',label: '8 Speed Automatic' },
  { value: '9-speed-automatic',label: '9 Speed Automatic' },
  { value: '6-speed-automatic-overdrive',label: '6 Speed Automatic Overdrive' },
  { value: '7-speed-automatic',label: '7 Speed Automatic' },
  { value: '5-speed-automatic',label: '5 Speed Automatic' },
  { value: '4-speed-automatic',label: '4 Speed Automatic' },
  { value: '6-speed-manual',label: '6 Speed Manual' },
  { value: '8-speed-automatic-overdrive',label: '8 Speed Automatic Overdrive' },
  { value: '5-speed-automatic-overdrive',label: '5 Speed Automatic Overdrive' },
  { value: '', label: '' }
]

function valuetext(value) {
  return `${value}°C`;
}

function buildUrl(url, data) {
  var qp = "";
  if (data["body"]) {
    qp += "bodyType=" + data["body"]["value"] + "&";
  }
  if (data["city"]) {
    qp += "city=" + data["city"]["value"] + "&";
  }
  if (data['color']) {
    qp += "listingColor=" + data['color']['value'] + "&";
  }
  if (data["make"]) {
    qp += "makeName=" + data["make"]["value"] + "&";
  }
  if (data["mileage"]) {
    qp += "mileage=" + data["mileage"]["value"] + "&";
  }
  if (data["price_high"] && data["price_low"]) {
    qp += "price=" + data["price_low"]['value'] + "-" + data["price_high"]["value"] + "&";
  }
  if (data["seating"]) {
    qp += "maximumSeating=" + data["seating"]["value"] + "&";
  }
  if (data["year_high"] && data["year_low"]) {
    qp += "year=" + data["year_low"]['value'] + "-" + data["year_high"]["value"] + "&";
  }
  if (data["transmission"]) {
    qp += "transmissionDisplay=" + data["transmission"]["value"] + "&";
  }
  if (qp.length > 0) {
    qp = qp.substring(0, qp.length-1);
    url = url + "?" + qp;
  }
  return url
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

    const onSubmit = data => {
      console.log(data)
        // axios.post('http://localhost:9000/test',data)
        // var fetchUrl = buildUrl("http://localhost:8080/car/list", data)
        var fetchUrl = buildUrl("http://34.125.152.171:8080/car/list", data)

        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json",
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*", 
          }
        };
        
        fetch(fetchUrl, requestOptions)      
        .then(response => response.json())      
        .then(res => console.log(res))
        .catch(err => {
          console.error(err);
        });

        // fetch("http://localhost:9000/test")      
        // .then(res => res.text())      
        // .then(res => console.log(res))
    };
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
    const handleTransmission_color = (change) => {
      setValue("transmission", change, {
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
              defaultValue={''}
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
              defaultValue={''}
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
              defaultValue={''}
              onChange={handleChange_make}
              styles={customStyles}
            />
          )}
        />
        <label>Transmission Display</label>
        {/* <div id ="s"> */}
        {/* <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}> */}
        <Controller 
          name="transmission"
          control={control}
          render={() => (
            <Select
              options={transmissionoption}
              defaultValue={''}
              onChange={handleTransmission_color}
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
