import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import PreLoad from "./PreLoad";
import Admin from "../admin/Admin";

// const Admin = React.lazy(() => import("../admin/Admin"));
const SignIn = React.lazy(() => import("../authentication/SignIn"));

const Dashboard = React.lazy(() => import("../admin/scenes/Dashboard"));
const Appointments = React.lazy(() => import("../admin/scenes/Appointments"));
const BookAppointments = React.lazy(() =>
  import("../admin/scenes/BookAppointment")
);
const ViewAppointments = React.lazy(() =>
  import("../admin/scenes/ViewAppointment")
);
const Doctors = React.lazy(() => import("../admin/scenes/Doctors"));
const AddDoctor = React.lazy(() => import("../admin/scenes/AddDoctor"));
const DoctorProfile = React.lazy(() => import("../admin/scenes/DoctorProfile"));
const Staff = React.lazy(() => import("../admin/scenes/Staff"));
const Patients = React.lazy(() => import("../admin/scenes/Patients"));
const Billing = React.lazy(() => import("../admin/scenes/Billing"));
const Records = React.lazy(() => import("../admin/scenes/Records"));
const Ambulance = React.lazy(() => import("../admin/scenes/Ambulance"));
const _route = [
  {
    path: "dashboard", // Remove the '/admin' prefix
    component: Dashboard,
    permission: ["user", "admin"],
  },
  {
    path: "appointment",
    component: Appointments,
    permission: ["user", "admin"],
  },
  {
    path: "appointment/book/*",
    component: BookAppointments,
    permission: ["user", "admin"],
  },
  {
    path: "appointment/view/*",
    component: ViewAppointments,
    permission: ["user", "admin"],
  },
  {
    path: "doctors/view/*",
    component: Doctors,
    permission: ["user", "admin"],
  },
  {
    path: "doctors/add/*",
    component: AddDoctor,
    permission: ["user", "admin"],
  },
  {
    path: "doctors/profile/*",
    component: DoctorProfile,
    permission: ["user", "admin"],
  },
  {
    path: "staff",
    component: Staff,
    permission: ["user", "admin"],
  },
  {
    path: "patients",
    component: Patients,
    permission: ["user", "admin"],
  },
  {
    path: "billing",
    component: Billing,
    permission: ["user", "admin"],
  },
  {
    path: "records",
    component: Records,
    permission: ["user", "admin"],
  },
  {
    path: "ambulance",
    component: Ambulance,
    permission: ["user", "admin"],
  },
];

const AppRouters = () => {
  return (
    <React.Suspense fallback={<PreLoad />}>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/authentication/signin" element={<SignIn />} />

        {/* Redirect from "/" and "/admin" to "/admin/dashboard" */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route
          path="/admin"
          element={<Navigate to="/admin/dashboard" replace />}
        />

        {/* Layout route for '/admin' */}
        <Route path="/admin" element={<Admin />}>
          {/* Other nested routes */}
          {_route.map((item, index) => (
            <Route key={index} path={item.path} element={<item.component />} />
          ))}
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default AppRouters;
