import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";

const presets: { [index: string]: any } = {
  default: {
    color: colors.dark,
    boxShadow: "0px 0px 1.5px 1px" + colors.dark,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.dark,
    },
  },
  //   primary: {
  //     color: colors.primary,
  //     boxShadow: "0px 0px 1.5px 1px" + colors.primary,
  //     "&:hover": {
  //       boxShadow: "0px 0px 3px 1.5px" + colors.primary,
  //     },
  //   },
  //   secondary: {
  //     color: colors.secondary,
  //     boxShadow: "0px 0px 1.5px 1px" + colors.secondary,
  //     "&:hover": {
  //       boxShadow: "0px 0px 3px 1.5px" + colors.secondary,
  //     },
  //   },
  info: {
    color: colors.lightBlue,
    boxShadow: "0px 0px 1.5px 1px" + colors.lightBlue,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.lightBlue,
    },
  },
  warning: {
    color: colors.red,
    boxShadow: "0px 0px 1.5px 1px" + colors.red,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.red,
    },
  },
  success: {
    color: colors.success,
    boxShadow: "0px 0px 1.5px 1px" + colors.success,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.success,
    },
  },
  disable: {
    color: colors.medium,
    boxShadow: "0px 0px 1.5px 1px" + colors.medium,
    cursor: "auto",
    "&:hover": {
      boxShadow: "0px 0px 1.5px 1px" + colors.medium,
    },
  },
};

type ButtonTheme = "default" | "info" | "success" | "warning" | "disable";

interface ButtonProps {
  className?: string;
  disable?: boolean;
  label?: string;
  onClick: React.MouseEventHandler;
  theme?: ButtonTheme;
  role?: string;
}

const Button = ({
  className = "",
  disable = false,
  label = "",
  onClick,
  theme = "default",
  role,
}: ButtonProps) => {
  const classes = useStyle({ theme, disable });
  return (
    <div
      role={role}
      className={`${classes.container} ${className}`}
      onClick={!disable ? onClick : () => {}}
    >
      {label}
    </div>
  );
};

const useStyle = createUseStyles({
  container: ({ theme, disable }) => ({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: "7px 15px 7px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: colors.white,
    fontFamily: fontFamilies.text,
    fontWeight: "500",
    ...(!disable
      ? theme
        ? presets[theme]
          ? presets[theme]
          : presets.default
        : presets.default
      : presets.disable),
  }),
});

export default Button;
