import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

import {
  GoogleRating,
  InstagramIcon,
  UserAnonyIcon,
} from "@/components/icons";
import Logo from "./Logo";
import { ThemeSwitch } from "./theme-switch";

export const Navbar = () => {

  return (
    <HeroUINavbar maxWidth="xl" className="bg-[#1A22C2]" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full flex justify-start items-center" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo/>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground", size: 'sm'}),
                    "data-[active=true]:text-primary data-[active=true]:font-medium text-indigo-50 font-normal",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100 flex items-center justify-center px-5"
            href={siteConfig.links.sponsor}
            startContent={<UserAnonyIcon color="red" className="text-danger" />}
            variant="flat"
          >
            Accont
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.instagram}>
          <InstagramIcon className="text-default-500" />
        </Link>
        <Link isExternal aria-label="Google" href={siteConfig.links.GoogleRating}>
            <GoogleRating className="text-default-500" />
          </Link>
        <NavbarMenuToggle className="!text-white" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
