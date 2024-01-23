import React, { useId, useState } from "react";
import CustomSelect from "../Models/CustomSelect";
import MultiLineInput from "../Models/MultiLineInput";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack } from "@mui/material";
import CustomDatePicker from "../Models/CustomDatePicker";
import CustomTextInput from "../Models/CustomTextInput";
import RadioButton from "../Models/RadioButton";

const AddStaffForm = () => {
  const initialValues = {
    staff_name: "",
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
  const responseValue = useSelector((state) => state.staffList.staffItem);

  const hospitalDepartments = Array.from(
    new Set(responseValue.map((item) => item.designation))
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

    setLocalInputValue(initialValues); //set all inputfield to default value
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
          name="doctor_name"
          inputValue={localInputValue.staff_name}
          handleChangeValue={handleChangeValue}
        />
        <CustomTextInput
          inputLabel="Mobile"
          name="mobile"
          inputValue={localInputValue.mobile}
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
          inputLabel="Email"
          name="email"
          inputValue={localInputValue.email}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <div className="sm:flex gap-4 block">
        <CustomTextInput
          inputLabel="Password"
          name="password"
          inputValue={localInputValue.password}
          handleChangeValue={handleChangeValue}
        />
        <CustomTextInput
          inputLabel="Re-Enter Password"
          name="re_password"
          inputValue={localInputValue.re_password}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <div className="sm:flex gap-4 block">
        <CustomSelect
          inputLabel="Select Designation"
          inputValue={hospitalDepartments}
          selectedValue={selectedDepartment}
          handleChangeValue={handleDepartmentChange}
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
          inputLabel="Address"
          name="address"
          inputValue={localInputValue.address}
          handleChangeValue={handleChangeValue}
        />
      </div>

      <div className="">
        <MultiLineInput
          inputLabel="Eduction"
          name="education"
          inputValue={localInputValue.education}
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

export default AddStaffForm;
