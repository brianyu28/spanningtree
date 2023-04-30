import NextLink from "next/link";

interface LinkProps {
  bold?: boolean;
  color?: string;
  underline?: boolean;
  children: React.ReactNode
  href: string;
}

function Link(props: LinkProps) {
  const { bold, children, color, href, underline } = props;
  return (
    <NextLink className={`
      ${color || "text-blue-500"}
      ${underline !== false && "hover:underline"}
      ${bold === true && 'font-bold'}`
    } href={href}>
      {children}
    </NextLink>
  );
}

export default Link;
