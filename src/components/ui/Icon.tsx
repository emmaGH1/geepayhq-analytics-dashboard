
interface Props {
    src: string,
    alt: string,
    className?: string,
    containerClass?: string
}

export const Icon = ({ src, alt, className, containerClass = '' }: Props) => {
  return (
    <div className={`mb-3 max-lg:mb-7 ${containerClass}`}>
        <img src={src} alt={alt} className={`w-5 h-5 ${className}`} />
    </div>
  );
};

