interface CardProps {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export default function Card({
  icon,
  title,
  children,
  className,
  showIcon = true,
}: CardProps) {
  return (
    <section
      className={`h-full w-full flex-col items-center justify-center rounded-3xl bg-white px-9 pb-8 pt-8 ${
        className || ''
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        {showIcon && (
          <div className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#f8e6e3]">
            {icon}
          </div>
        )}
        <h4 className="text-sm font-bold">{title}</h4>
      </div>
      {children}
    </section>
  );
}
