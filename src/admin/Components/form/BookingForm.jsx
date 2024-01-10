import React, { useState, useId } from "react";
import CustomTextInput from "../Models/CustomTextInput";
import CustomSelect from "../Models/CustomSelect";
import MultiLineInput from "../Models/MultiLineInput";
import CustomDatePicker from "../Models/CustomDatePicker";
import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomTimePicker from "../Models/CustomTimePicker";
import { setItems } from "../../../redux/slice/appointmentSlice";
import RadioButton from "../Models/RadioButton";

const BookingForm = () => {
  const [localInputValue, setLocalInputValue] = useState(null);
  const selectGender = ["Male", "Female"];

  const dispatch = useDispatch();
  const userId = useId();
  const responseValue = useSelector((state) => state.appointmentList.items);

  // Extracting unique consulting_doctor values
  const consultingDoctors = Array.from(
    new Set(responseValue.map((item) => item.consulting_doctor))
  );

  const handleChangeValue = (field, value) => {
    setLocalInputValue({
      ...localInputValue,
      [field]: value,
    });
  };

  const handleSave = () => {
    if (localInputValue !== null) {
      dispatch(
        setItems([
          ...responseValue,
          {
            id: userId,
            ...localInputValue,
          },
        ])
      );
    }

    console.log(responseValue);
  };

  return (
    <div className="card p-4">
      <div className="sm:flex gap-4 block">
        <CustomTextInput
          inputLabel="Full Name"
          handleChangeValue={(event) =>
            handleChangeValue("patient_name", event.target.value)
          }
        />
      </div>

      <div className="sm:grid grid-cols-2	 gap-4 block">
        <RadioButton
          radioValue="Male"
          handleChangeValue={(event) =>
            handleChangeValue("gender", event.target.value)
          }
        />

        <CustomTextInput
          inputLabel="Mobile"
          handleChangeValue={(event) =>
            handleChangeValue("mobile", event.target.value)
          }
        />
      </div>

      <div className="">
        <MultiLineInput inputLabel="Address" />
      </div>

      <div className="sm:flex gap-4 block">
        <CustomTextInput
          inputLabel="Email"
          handleChangeValue={(event) =>
            handleChangeValue("email", event.target.value)
          }
        />
        <CustomDatePicker inputLabel="Date of Birth" />
      </div>

      <div className="mt-8">
        <Typography fontWeight="600">Appointment Details</Typography>
        <div className="sm:flex gap-4 block">
          <CustomSelect
            inputLabel="Consulting Doctor"
            inputValue={consultingDoctors}
            handleChangeValue={(event) =>
              handleChangeValue("consulting_doctor", event.target.value)
            }
          />
          <CustomDatePicker
            inputLabel="Date of Appointment"
            handleChangeValue={(event) =>
              handleChangeValue("date", event.target.value)
            }
          />
        </div>
      </div>

      <div className="">
        <CustomTimePicker
          inputLabel="Time of Appointment"
          handleChangeValue={(event) =>
            handleChangeValue("time_from", event.target.value)
          }
        />
      </div>

      <div className="">
        <MultiLineInput
          inputLabel="Injury/Condition"
          handleChangeValue={(event) =>
            handleChangeValue("injury_condition", event.target.value)
          }
        />
      </div>

      <Stack spacing={2} direction="row" sx={{ ml: "0.8rem", mt: "2rem" }}>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
        <Button variant="contained" color="error">
          Clear
        </Button>
      </Stack>
    </div>
  );
};

export default BookingForm;
