import React, { useState, useId } from "react";
import CustomTextInput from "../Models/CustomTextInput";
import CustomSelect from "../Models/CustomSelect";
import MultiLineInput from "../Models/MultiLineInput";
import CustomDatePicker from "../Models/CustomDatePicker";
import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomTimePicker from "../Models/CustomTimePicker";
import RadioButton from "../Models/RadioButton";
import { setItems } from "../../../redux/slice/appointmentSlice";

const BookingForm = () => {
  const initialValues = {
    patient_name: "",
    gender: "Male", // Provide a default value for gender
    mobile: "",
    email: "",
    date_of_birth: null,
    consulting_doctor: "",
    date_of_appointment: null,
    time_of_appointment: null,
    injury_condition: "",
  };

  const [localInputValue, setLocalInputValue] = useState(initialValues);
  const dispatch = useDispatch();
  const userId = useId();
  const responseValue = useSelector((state) => state.appointmentList.items);

  const consultingDoctors = Array.from(
    new Set(responseValue.map((item) => item.consulting_doctor))
  );

  const handleChangeValue = (name, value) => {
    setLocalInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(
      setItems([
        ...responseValue,
        {
          id: userId,
          ...localInputValue,
        },
      ])
    );

    console.log(responseValue);
  };

  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
    handleChangeValue("consulting_doctor", event.target.value);
  };

  const handleClear = () => {
    setLocalInputValue(initialValues);
    setSelectedDoctor("");
  };

  const areAllFieldsFilled = () => {
    return Object.values(localInputValue).every(
      (value) => value !== "" && value !== null
    );
  };

  return (
    <div className="card p-4">
      <div className="sm:flex gap-4 block">
        <CustomTextInput
          inputLabel="Full Name"
          name="patient_name"
          inputValue={localInputValue.patient_name}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <div className="sm:grid grid-cols-2 gap-4 block">
        <RadioButton
          radioValue={localInputValue.gender}
          handleChangeValue={(event) =>
            handleChangeValue("gender", event.target.value)
          }
        />

        <CustomTextInput
          inputLabel="Mobile"
          name="mobile"
          inputValue={localInputValue.mobile}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <div className="">
        <MultiLineInput inputLabel="Address" />
      </div>

      <div className="sm:flex gap-4 block">
        <CustomTextInput
          inputLabel="Email"
          name="email"
          inputValue={localInputValue.email}
          handleChangeValue={handleChangeValue}
        />
        <CustomDatePicker
          inputLabel="Date of Birth"
          name="date_of_birth"
          inputValue={localInputValue.date_of_birth}
          selectedDate={localInputValue.date_of_birth}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <div className="mt-8">
        <Typography fontWeight="600">Appointment Details</Typography>

        <div className="sm:flex gap-4 block">
          <CustomSelect
            inputLabel="Consulting Doctor"
            inputValue={consultingDoctors}
            selectedValue={selectedDoctor}
            handleChangeValue={handleDoctorChange}
          />
          <CustomDatePicker
            inputLabel="Date of Appointment"
            name="date_of_appointment"
            selectedDate={localInputValue.date_of_appointment}
            handleChangeValue={handleChangeValue}
          />
        </div>
      </div>

      <div className="">
        <CustomTimePicker
          inputLabel="Time of Appointment"
          name="time_of_appointment"
          selectedTime={localInputValue.time_of_appointment}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <div className="">
        <MultiLineInput
          inputLabel="Injury/Condition"
          name="injury_condition"
          inputValue={localInputValue.injury_condition}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <Stack spacing={2} direction="row" sx={{ ml: "0.8rem", mt: "2rem" }}>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!areAllFieldsFilled()}
        >
          Save
        </Button>
        <Button variant="contained" color="error" onClick={handleClear}>
          Clear
        </Button>
      </Stack>
    </div>
  );
};

export default BookingForm;
