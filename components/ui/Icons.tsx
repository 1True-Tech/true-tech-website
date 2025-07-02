import { IconProps } from "@phosphor-icons/react";
import {
  ArrowRightIcon,
  AtIcon,
  BinocularsIcon,
  BrowsersIcon,
  CursorClickIcon,
  GlobeSimpleIcon,
  HeadsetIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  ListIcon,
  PaperPlaneRightIcon,
  PhoneIcon,
  QuotesIcon,
  RocketLaunchIcon,
  StrategyIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

type icon_name =
  | "list"
  | "arrow_right"
  | "browsers"
  | "globe_simple"
  | "cursor_click"
  | "binoculars"
  | "strategy"
  | "rocket_launch"
  | "headset"
  | "quotes"
  | "x_logo"
  | "linkedin_logo"
  | "paper_plane_right"
  | "instagram_logo"
  | "phone"
  | "at";

interface Icon extends IconProps {
  icon_name: icon_name;
}

export default function Icons({
  icon_name,
  size = 24,
  color = "currentColor",
  weight = "regular",
}: Icon) {
  switch (icon_name) {
    case "list":
      return <ListIcon size={size} color={color} weight={weight} />;
    case "arrow_right":
      return <ArrowRightIcon size={size} color={color} weight={weight} />;
    case "browsers":
      return <BrowsersIcon size={size} color={color} weight={weight} />;
    case "globe_simple":
      return <GlobeSimpleIcon size={size} color={color} weight={weight} />;
    case "cursor_click":
      return <CursorClickIcon size={size} color={color} weight={weight} />;
    case "binoculars":
      return <BinocularsIcon size={size} color={color} weight={weight} />;
    case "strategy":
      return <StrategyIcon size={size} color={color} weight={weight} />;
    case "rocket_launch":
      return <RocketLaunchIcon size={size} color={color} weight={weight} />;
    case "headset":
      return <HeadsetIcon size={size} color={color} weight={weight} />;
    case "quotes":
      return <QuotesIcon size={size} color={color} weight={weight} />;
    case "x_logo":
      return <XLogoIcon size={size} color={color} weight={weight} />;
    case "linkedin_logo":
      return <LinkedinLogoIcon size={size} color={color} weight={weight} />;
    case "paper_plane_right":
      return <PaperPlaneRightIcon size={size} color={color} weight={weight} />;
    case "instagram_logo":
      return <InstagramLogoIcon size={size} color={color} weight={weight} />;
    case "phone":
      return <PhoneIcon size={size} color={color} weight={weight} />;
    case "at":
      return <AtIcon size={size} color={color} weight={weight} />;
    default:
      return null;
  }
}
