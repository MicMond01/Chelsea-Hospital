import React, { useId, useState } from "react";
import CustomSelect from "../Models/CustomSelect";
import MultiLineInput from "../Models/MultiLineInput";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack } from "@mui/material";
import CustomDatePicker from "../Models/CustomDatePicker";
import CustomTextInput from "../Models/CustomTextInput";
import RadioButton from "../Models/RadioButton";

const DoctorForm = () => {
  const initialValues = {
    doctor_name: "",
    gender: "Male", // Provide a default value for gender
    mobile: "",
    password: "",
    re_password: "",
    designation: "",
    address: "",
    email: "",
    date_of_birth: null,
    education: "",
  };

  const [localInputValue, setLocalInputValue] = useState(initialValues);
  //   const dispatch = useDispatch();
  const userId = useId();
  const responseValue = useSelector((state) => state.doctorList.items);

  const hospitalDepartments = Array.from(
    new Set(responseValue.map((item) => item.department))
  );

  const handleChangeValue = (name, value) => {
    setLocalInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    handleChangeValue("department", event.target.value);
  };

  const handleSave = () => {
    const serializableState = {
      id: userId,
      ...localInputValue,
    };

    setLocalInputValue(initialValues);
  };

  const handleClear = () => {
    setLocalInputValue(initialValues);
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
          name="gender"
          radioValue={localInputValue.gender}
          handleChangeValue={handleChangeValue}
        />

        <CustomTextInput
          inputLabel="Mobile"
          name="mobile"
          inputValue={localInputValue.mobile}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <div className="sm:flex gap-4 block">
        <CustomTextInput
          inputLabel="Password"
          name="password"
          inputValue={localInputValue.patient_name}
          handleChangeValue={handleChangeValue}
        />
        <CustomTextInput
          inputLabel="Re-Enter Password"
          name="re-enter_password"
          inputValue={localInputValue.patient_name}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <div className="sm:flex gap-4 block">
        <CustomTextInput
          inputLabel="Designation"
          name="designation"
          inputValue={localInputValue.patient_name}
          handleChangeValue={handleChangeValue}
        />
        <CustomSelect
          inputLabel="Select Department"
          inputValue={hospitalDepartments}
          selectedValue={selectedDepartment}
          handleChangeValue={handleDepartmentChange}
        />
      </div>

      <div className="">
        <MultiLineInput
          inputLabel="Address"
          name="address"
          inputValue={localInputValue.address}
          handleChangeValue={handleChangeValue}
        />
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

      <div className="">
        <MultiLineInput
          inputLabel="Eduction"
          name="education"
          inputValue={localInputValue.address}
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

export default DoctorForm;
