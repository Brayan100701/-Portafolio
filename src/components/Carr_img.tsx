interface Props {
  img: string;
}

export default function Carr_img({ img }: Props) {
  console.log(img);
  return (
    <>
      <div className="carousel-item active">
        <img src={img} className="d-block w-100" alt="..." />
      </div>
    </>
  );
}
