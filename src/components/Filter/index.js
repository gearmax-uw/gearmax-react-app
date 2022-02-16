import { useForm, Controller } from "react-hook-form";
import "./styles.css";
import Select from 'react-select'
import { fetchCars, FILTER_SUBMIT } from "../../action";
import store from "../../store";

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
  { value: '', label: '' }
]

const makeoption = [
  { value: 'ford', label: 'Ford' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'jeep', label: 'Jeep' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'kia', label: 'Kia' },
  { value: 'ram', label: 'Ram' },
  { value: 'gmc', label: 'GMC' },
  { value: 'dodge', label: 'Dodge' },
  { value: 'volkswagen', label: 'Volkswagen' },
  { value: 'subaru', label: 'Subaru' },
  { value: 'mercedes-benz', label: 'Mercedes Benz' },
  { value: 'buick', label: 'Buick' },
  { value: 'bmw', label: 'BMW' },
  { value: 'mazda', label: 'Mazda' },
  { value: 'cadillac', label: 'Cadillac' },
  { value: 'lexus', label: 'Lexus' },
  { value: 'chrysler', label: 'Chrysler' },
  { value: 'audi', label: 'Audi' },
  { value: 'lincoln', label: 'Lincoln' },
  { value: 'acura', label: 'Acura' },
  { value: 'infiniti', label: 'Infiniti' },
  { value: 'volvo', label: 'Volvo' },
  { value: 'mitsubishi', label: 'Mitsubishi' },
  { value: 'land-rover', label: 'Land Rover' },
  { value: 'porsche', label: 'Porsche' },
  { value: 'mini', label: 'Mini' },
  { value: 'jaguar', label: 'Jaguar' },
  { value: 'alfa-romeo', label: 'Alfa Romeo' },
  { value: 'genesis', label: 'Genesis' },
  { value: 'maserati', label: 'Maserati' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'pontiac', label: 'Pontiac' },
  { value: 'scion', label: 'Scion' },
  { value: 'tesla', label: 'Tesla' },
  { value: 'mercury', label: 'Mercury' },
  { value: 'saturn', label: 'Saturn' },
  { value: 'ferrari', label: 'Ferrari' },
  { value: '', label: '' }
]

const coloroption = [
  { value: 'blue', label: 'Blue' },
  { value: 'red', label: 'Red' },
  { value: 'black', label: 'Black' },
  { value: 'silver', label: 'Silver' },
  { value: 'white', label: 'White' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'brown', label: 'Brown' },
  { value: 'gold', label: 'Gold' },
  { value: 'gray', label: 'Gray' },
  { value: 'orange', label: 'Orange' },
  { value: 'pink', label: 'Pink' },
  { value: 'purple', label: 'Purple' },
  { value: 'teal', label: 'Teal' },
  { value: '', label: '' }
]

const transmission_display_option = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'continuously-variable-transmission', label: 'Continuously Variable Transmission' },
  { value: '6-speed-automatic', label: '6 Speed Automatic' },
  { value: '8-speed-automatic', label: '8 Speed Automatic' },
  { value: '9-speed-automatic', label: '9 Speed Automatic' },
  { value: '6-speed-automatic-overdrive', label: '6 Speed Automatic Overdrive' },
  { value: '7-speed-automatic', label: '7 Speed Automatic' },
  { value: '5-speed-automatic', label: '5 Speed Automatic' },
  { value: '4-speed-automatic', label: '4 Speed Automatic' },
  { value: '6-speed-manual', label: '6 Speed Manual' },
  { value: '8-speed-automatic-overdrive', label: '8 Speed Automatic Overdrive' },
  { value: '5-speed-automatic-overdrive', label: '5 Speed Automatic Overdrive' },
  { value: '', label: '' }
]

function buildUrl(url, data) {
  // console.log(data)
  var qp = "";
  if (data["body"] && data["body"]["value"]) {
    qp += "bodyType=" + data["body"]["value"] + "&";
    // store filter value in store
    store.dispatch({
      type: "body",
      payload: data["body"]["value"]
    });
  }
  if (data["city"] && data["body"]["value"]) {
    qp += "city=" + data["city"]["value"] + "&";
    store.dispatch({
      type: "city",
      payload: data["city"]["value"]
    });
  }
  if (data['color'] && data['color']['value']) {
    qp += "listingColor=" + data['color']['value'] + "&";
    store.dispatch({
      type: "color",
      payload: data["color"]["value"]
    });
  }
  if (data["make"] && data["make"]["value"]) {
    qp += "makeName=" + data["make"]["value"] + "&";
    store.dispatch({
      type: "make",
      payload: data["make"]["value"]
    });
  }
  if (data["mileage"]) {
    qp += "mileage=" + data["mileage"] + "&";
    store.dispatch({
      type: "mileage",
      payload: data["mileage"]
    });
  }
  if (data["price_high"] && data["price_low"]) {
    qp += "price=" + data["price_low"] + "-" + data["price_high"] + "&";
    store.dispatch({
      type: "price_high",
      payload: data["price_high"]
    });
    store.dispatch({
      type: "price_low",
      payload: data["price_low"]
    });
  }
  if (data["seating"]) {
    qp += "maximumSeating=" + data["seating"] + "&";
    store.dispatch({
      type: "seating",
      payload: data["seating"]
    });
  }
  if (data["year_high"] && data["year_low"]) {
    qp += "year=" + data["year_low"] + "-" + data["year_high"] + "&";
    store.dispatch({
      type: "year_high",
      payload: data["year_high"]
    });
    store.dispatch({
      type: "year_low",
      payload: data["year_low"]
    });
  }
  if (data["transmission_display"] && data["transmission_display"]["value"]) {
    qp += "transmissionDisplay=" + data["transmission_display"]["value"] + "&";
    store.dispatch({
      type: "transmission_display",
      payload: data["transmission_display"]["value"]
    });
  }
  if (qp.length > 0) {
    qp = qp.substring(0, qp.length - 1);
    url = url + "?" + qp;
    if (store.getState().filterParam && store.getState().filterParam.page_size) {
      url = url + "&pageSize=" + store.getState().filterParam.page_size;
    } else {
      url = url + "&pageSize=" + window.carsPerPage;
    }
    if (store.getState().filterParam && store.getState().filterParam.page_index) {
      url = url + "&pageIndex=" + store.getState().filterParam.page_index;
    } else {
      url = url + "&pageIndex=0";
    }
  } else {
    if (store.getState().filterParam && store.getState().filterParam.page_size) {
      url = url + "?pageSize=" + store.getState().filterParam.page_size + "&pageIndex=0";
    } else {
      url = url + "?pageSize=" + window.carsPerPage + "&pageIndex=0";
    }
  }

  store.dispatch({
    type: FILTER_SUBMIT,
    payload: {
      "filterSubmitted": true
    }
  });

  return url
}

const Filter = (props) => {
  const { register, control, setValue, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // build get/fetch url and save updated filter parameters in redux store
    var fetchUrl = buildUrl(window.baseUrl, data)
    // save fetched car data in redux store
    store.dispatch(fetchCars(fetchUrl));

    // const requestOptions = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     'Accept': 'application/json',
    //     "Access-Control-Allow-Origin": "*",
    //   }
    // };    
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
  const handleChange_transmission_display = (change) => {
    setValue("transmission_display", change, {
      shouldDirty: true
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Car Make</label>
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

      <label>Body Type</label>
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

      <label>Year</label>
      <input {...register("year_low")} placeholder="From" />
      <input {...register("year_high")} placeholder="To" />

      <label>Price</label>
      <input {...register("price_low")} placeholder="From" />
      <input {...register("price_high")} placeholder="To" />

      <label> Mileage &#8804;</label>
      <input {...register("mileage")} placeholder="Less than" />

      <label> Seating &#8804;</label>
      <input {...register("seating")} placeholder="Less than" />

      <label>Exterior Color</label>
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

      {/* <label>Transmission</label>
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
      /> */}

      <label>Transmission Display</label>
      <Controller
        name="transmission_display"
        control={control}
        render={() => (
          <Select
            options={transmission_display_option}
            defaultValue={''}
            onChange={handleChange_transmission_display}
            styles={customStyles}
          />
        )}
      />

      <label>City</label>
      <input {...register("city")} placeholder="City" />

      <input type="submit" />
    </form>
  );
};

export default (Filter);
