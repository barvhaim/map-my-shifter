import React from "react";
import { Shell } from "@carbon/ibm-security";
import { useHistory } from "react-router-dom";

const HeaderSection = () => {
  const history = useHistory();
  const handleClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(link);
  };

  return (
    <Shell
      header={{
        labels: {
          brand: {
            company: "IBM",
            product: "Map My Shifter",
          },
          notifications: {
            button: "Toggle notifications",
            clear: "Clear",
            clear_all: "Clear all notifications",
            link: "View all",
            success: "You're all caught up!",
            title: "Notifications",
            today: "Today",
            via: "via",
          },
          profile: {
            account: "Account",
            button: "Toggle profile",
            edit_profile: "Edit profile",
            link: "Profile & account",
            registration: "Create an account",
            sign_in: "Sign in",
            sign_out: "Sign out",
          },
        },
        links: {
          edit_profile: "#",
          notifications_preferences: "#",
          notifications_view_all: "#",
          product: "/",
          profile: "#",
          registration: "#",
          sign_in: "#",
          sign_out: "/appid/logout",
        },
        totalNotifications: 0,
      }}
      profile={{
        image_url: null,
        name: {
          first_name: "Demo",
          surname: "User",
        },
      }}
      renderAddons={[]}
      skipToContent={{
        href: "/",
        label: "Skip to content",
      }}
      toolbar={{
        labels: {
          mainNavigation: {
            ariaLabel: "Main navigation",
          },
          menu: {
            button: "Toggle menu",
            tooltip: "Menu",
          },
          settings: {
            button: "Toggle settings",
            tooltip: "Settings",
          },
          support: {
            button: "Toggle about",
            tooltip: "Creators",
          },
        },
        menu: [
          {
            id: "#map-my-shifter",
            title: "Map My Shifter",
            navigation: [
              {
                id: "#from-stix",
                title: "From STIX",
                children: undefined,
                content: undefined,
                href: "/from_stix",
                onClick: (e) => handleClick(e, "/from_stix"),
                icon: undefined,
              },
              {
                id: "#to-stix",
                title: "To STIX",
                children: undefined,
                content: undefined,
                href: "/to_stix",
                onClick: (e) => handleClick(e, "/to_stix"),
                icon: undefined,
              },
            ],
          },
        ],
        settings: [
          {
            id: "#1",
            title: "Application settings",
            navigation: [],
          },
        ],
        support: [
          {
            id: "#2",
            title: "About",
            href: "/about",
            navigation: [
              {
                id: "#21",
                title: "About",
                href: "/about",
                content: undefined,
                icon: undefined,
              },
            ],
          },
        ],
      }}
    />
  );
};
export default HeaderSection;
