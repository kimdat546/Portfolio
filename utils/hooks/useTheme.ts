import { useEffect, useState } from "react";

type Theme = "dark" | "light";
type useThemeReturn = [string, (theme: string) => void];

export const useTheme = (initialTheme: Theme): useThemeReturn => {
    const [theme, setTheme] = useState<Theme>(initialTheme || "dark");

    const handleChange = (value: string) =>
        setTheme(value === "dark" ? "dark" : "light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return [theme, handleChange];
};
