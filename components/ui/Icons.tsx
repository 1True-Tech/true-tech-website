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
  MapPinIcon,
  PaperPlaneRightIcon,
  PhoneIcon,
  QuotesIcon,
  RocketLaunchIcon,
  StrategyIcon,
  XLogoIcon,
  EnvelopeSimpleIcon,
  TwitterLogoIcon,
  DribbbleLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export type icon_name =
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
  | "twitter_logo"
  | "linkedin_logo"
  | "paper_plane_right"
  | "instagram_logo"
  | "phone"
  | "envelop"
  | "map_pin"
  | "dribble_logo"
  | "at";

interface Icon extends IconProps {
  icon_name: icon_name;
}


export default function Icons({
  icon_name,
  size = 24,
  color = "currentColor",
  weight = "regular",
  ...props
}: Icon) {
  switch (icon_name) {
    case "list":
      return <ListIcon size={size} color={color} weight={weight} {...props} />;
    case "arrow_right":
      return (
        <ArrowRightIcon size={size} color={color} weight={weight} {...props} />
      );
    case "browsers":
      return (
        <BrowsersIcon size={size} color={color} weight={weight} {...props} />
      );
    case "globe_simple":
      return (
        <GlobeSimpleIcon size={size} color={color} weight={weight} {...props} />
      );
    case "cursor_click":
      return (
        <CursorClickIcon size={size} color={color} weight={weight} {...props} />
      );
    case "binoculars":
      return (
        <BinocularsIcon size={size} color={color} weight={weight} {...props} />
      );
    case "strategy":
      return (
        <StrategyIcon size={size} color={color} weight={weight} {...props} />
      );
    case "rocket_launch":
      return (
        <RocketLaunchIcon
          size={size}
          color={color}
          weight={weight}
          {...props}
        />
      );
    case "headset":
      return (
        <HeadsetIcon size={size} color={color} weight={weight} {...props} />
      );
    case "quotes":
      return (
        <QuotesIcon size={size} color={color} weight={weight} {...props} />
      );
    case "twitter_logo":
      return (
        <TwitterLogoIcon size={size} color={color} weight={weight} {...props} />
      );
    case "linkedin_logo":
      return (
        <LinkedinLogoIcon
          size={size}
          color={color}
          weight={weight}
          {...props}
        />
      );
    case "paper_plane_right":
      return (
        <PaperPlaneRightIcon
          size={size}
          color={color}
          weight={weight}
          {...props}
        />
      );
    case "instagram_logo":
      return (
        <InstagramLogoIcon
          size={size}
          color={color}
          weight={weight}
          {...props}
        />
      );
    case "phone":
      return <PhoneIcon size={size} color={color} weight={weight} {...props} />;
    case "at":
      return <AtIcon size={size} color={color} weight={weight} {...props} />;
    case "envelop":
      return (
        <EnvelopeSimpleIcon
          size={size}
          color={color}
          weight={weight}
          {...props}
        />
      );

    case "map_pin":
      return (
        <MapPinIcon
          size={size}
          color={color}
          weight={weight}
          {...props}
        />
      );

    case "dribble_logo":
      return (
        <DribbbleLogoIcon
          size={size}
          color={color}
          weight={weight}
          {...props}
        />
      );

    default:
      return null;
  }
}
