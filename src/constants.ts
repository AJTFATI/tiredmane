import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconBrandInstagram from "@/assets/icons/IconBrandInstagram.svg";
import { SITE } from "@/config";

export interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [

    {
    name: "Instagram",
    href: "https://www.instagram.com/alexanderjordantaylor/",
    linkTitle: `${SITE.title} on Instagram`,
    icon: IconBrandInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexanderjordantaylor/",
    linkTitle: `Connect with me on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:contact@alexanderjtaylor.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
  
];

export const SHARE_LINKS: Social[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/alexanderjordantaylor/",
    linkTitle: `Share this post on Instagram`,
    icon: IconBrandInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: `Share this post on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
];