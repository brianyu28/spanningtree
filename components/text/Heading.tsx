interface HeadingProps {
  children: React.ReactNode;
  // 1 for largest heading, 2 for second largest
  level?: number;
}

function Heading(props: HeadingProps) {
  const { children, level } = props;
  const sizeClass = level === 2 ? "text-2xl" : "text-3xl";
  const spacingClass = level === 2 ? "my-2" : "mt-6 mb-5";
  return (
    <div className={`font-bold ${sizeClass} ${spacingClass}`}>
      {children}
    </div>
  );
}

export default Heading;
