import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    action: {
      disabled: "#E0E0E0",
    },
    warning: {
      main: "#E74040",
    },
    success: {
      main: "#2DC071",
    },
    primary: {
      main: "#23A6F0",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#23856D",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
      disabled: "#BDBDBD",
    },
  },
});

interface AppThemeProps {
  children: React.ReactNode;
}

export default function AppTheme({ children }: AppThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
