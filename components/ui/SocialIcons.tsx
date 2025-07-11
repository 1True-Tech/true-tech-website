import Link from "next/link";
import Icons from "./Icons";
import Button from "./Button";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/yourhandle",
      icon: <Icons icon_name="twitter_logo" weight="fill" className="size-5" />,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      icon: (
        <Icons icon_name="linkedin_logo" weight="fill" className="w-5 h-5" />
      ),
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourhandle",
      icon: (
        <Icons icon_name="instagram_logo" weight="fill" className="w-5 h-5" />
      ),
      color: "hover:text-[#E1306C]",
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/yourprofile",
      icon: (
        <Icons icon_name="dribble_logo" weight="fill" className="w-5 h-5" />
      ),
      color: "hover:text-[#EA4C89]",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Connect With Us
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Follow us on social media for updates and news
        </p>
      </div>
      <div className="flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant="primary"
            className={`flex items-center justify-center w-12 h-12 rounded-full`}
            options={{
              background: "bg-primary",
              border: "border border-secondary",
              hoverBg: "hover:bg-primary/95",
              hoverText: link.color,
            }}
            rightIcon={
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={link.color}
              >
                {link.icon}
              </Link>
            }
          />
        ))}
      </div>
    </div>
  );
};

// <Button
//   variant="fill"
//   options={{
//     background: "bg-pink-500",
//     border: "border border-pink-600",
//     text: "text-white",
//     hoverBg: "hover:bg-pink-600",
//     hoverText: "hover:text-white",
//     shadow: "shadow-[0_4px_20px_rgba(236,72,153,0.25)]",
//   }}
// >
//   Custom Color
// </Button>

export default SocialIcons;
