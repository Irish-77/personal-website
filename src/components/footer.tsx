import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { href: siteConfig.links.github, Icon: FaGithub, label: "GitHub" },
  { href: siteConfig.links.linkedIn, Icon: FaLinkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Me</h3>
            <p className="text-sm text-muted-foreground">
              Machine learning enthusiast with expertise in computer vision,
              combining theoretical concepts with practical industry experience.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Me</h3>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
