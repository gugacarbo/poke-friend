"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ModeToggle() {
  const t = useTranslations("Theme");
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="w-[1.2rem] h-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute w-[1.2rem] h-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={theme === "light" ? "pointer-events-none underline" : ""}
          onClick={() => setTheme("light")}
        >
          {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={theme === "dark" ? "pointer-events-none underline" : ""}
          onClick={() => setTheme("dark")}
        >
          {t("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={theme === "system" ? "pointer-events-none underline" : ""}
          onClick={() => setTheme("system")}
        >
          {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
