import { useForm, Controller } from "react-hook-form";
import "./styles.css";
import Select from 'react-select'


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

const fueloption = [
  { value: 'gasoline', label: 'Gasoline' },
  { value: 'flex-fuel-vehicle', label: 'Flex Fuel Vehicle' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'biodiesel', label: 'Biodiesel' },
  { value: 'electric', label: 'Electric' },
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



const Predict = (props) => {
  const { register, control, setValue, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data)
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
  const handleChange_fuel = (change) => {
    setValue("fuel", change, {
      shouldDirty: true
    });
  };
  const handleChange_color = (change) => {
    setValue("color", change, {
      shouldDirty: true
    });
  };


  return (
    <div>
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <div className="label_container">Please enter the following information of your car:</div>
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

        <label>Fuel Type</label>
        <Controller
          name="fuel"
          control={control}
          render={() => (
            <Select
              options={fueloption}
              defaultValue={''}
              onChange={handleChange_fuel}
              styles={customStyles}
            />
          )}
        />

        <label>Year</label>
        <input {...register("year")} />



        <label> Mileage</label>
        <input {...register("mileage")} />

        <label> Seating</label>
        <input {...register("seating")} />

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


        <input type="submit" />
      </form>

      <div className="form_container">
        <div className="label_container">
          The price predicted for your car:
        </div>
        <div className="prediction_container">CAD 10000</div>
      </div>
    </div>
  );
};

export default (Predict);
