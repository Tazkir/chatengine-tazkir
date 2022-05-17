import Link from "next/link";

export const ShortCutLink = ({ addBreak = false, href, children }) => {
  return (
    <div style={{ paddingBottom: addBreak ? "12px" : "0px" }}>
      <Link href={href} onClick={() => window.location.replace(href)}>
        {children}
      </Link>
    </div>
  );
};

export default function component() {
  return <></>;
}
