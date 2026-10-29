
import { GitFork, Mail, UserRound } from "lucide-react";
import "./SocialLinks.css";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: GitFork,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: UserRound,
  },
  {
    name: "Email",
    url: "mailto:your-email@example.com",
    icon: Mail,
  },
];

function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        const isEmail = social.url.startsWith("mailto:");

        return (
          <a
            key={social.name}
            href={social.url}
            className="social-link"
            aria-label={social.name}
            title={social.name}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noreferrer"}
          >
            <Icon size={21} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
