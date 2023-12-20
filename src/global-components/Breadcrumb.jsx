import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setbreadcrumb } from "../redux/slice/breadcrumbSlice";

export default function Breadcrumb() {
  const breadcrumbTitle = useSelector(
    (state) => state.breadcrumb.breadcrumbTitle
  );
  const dispatch = useDispatch();
  const location = useLocation();

  // Access the pathname property to get the current pathname
  const pathname = location.pathname;

  // Split the pathname into an array of segments
  const pathSegments = pathname.split("/");

  // Find the index of the first non-empty segment after "/admin"
  const startIndex = pathSegments.indexOf("admin") + 1;
  const nonEmptySegmentIndex = pathSegments.findIndex(
    (segment, index) => index >= startIndex && segment !== ""
  );

  // Extract the path segment dynamically
  const dynamicPath =
    nonEmptySegmentIndex !== -1 ? `${pathSegments[nonEmptySegmentIndex]}` : "";

  const formattedDynamicPath =
    dynamicPath[0].toUpperCase() + dynamicPath.substring(1);

  dispatch(setbreadcrumb({ formattedDynamicPath: formattedDynamicPath }));

  return (
    <div className="mt-[48px] md:mt-[70px] mb-[28px] md:flex block justify-between items-center">
      <h1 className="breadcrumb-title md:text-2xl md:mb-0 text-lg mb-5">
        {breadcrumbTitle !== null ? breadcrumbTitle : formattedDynamicPath}
      </h1>

      <div role="presentation">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            padding: "15px",
            borderRadius: "50px",
            background: "rgba(220, 208, 208, 0.3)",
            paddingLeft: "20px",
          }}
        >
          <Link href="/admin/dashboard" color="inherit" underline="hover">
            <Box
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Box>
          </Link>
          <Box sx={{ display: "flex", alignItems: "center" }} color="inherit">
            {dynamicPath}
          </Box>
          {breadcrumbTitle !== null ? (
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              {breadcrumbTitle}
            </Typography>
          ) : (
            ""
          )}
        </Breadcrumbs>
      </div>
    </div>
  );
}
