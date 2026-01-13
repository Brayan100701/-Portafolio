interface Props {
  img: string;
  index: number;
}

export default function Carr_img({ img, index }: Props) {
  const clase = index === 0 ? "carousel-item active" : "carousel-item";
  return (
    <>
      <div className={clase}>
        <img src={img} className="d-block w-100" alt="..." />
      </div>
    </>
  );
}
