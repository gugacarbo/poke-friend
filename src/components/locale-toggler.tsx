"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { LocaleLabels, Locales } from "@/i18n";
import Link from "next/link";

import { US, BR } from "country-flag-icons/react/1x1";

const LocaleIcons: Record<Locales, React.ReactNode> = {
  [Locales.en]: <US />,
  [Locales["pt-br"]]: <BR />,
};

export function LocaleToggle() {
  const locale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="p-1">
          <div className="rounded-lg w-full overflow-hidden aspect-square">
            {LocaleIcons[locale as Locales]}
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(LocaleLabels).map(([l, label]) => (
          <Link
            key={l}
            href={`/${l}`}
            locale={false}
            className={l === locale ? "pointer-events-none underline" : ""}
          >
            <DropdownMenuItem className="cursor-pointer">
              {label}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
