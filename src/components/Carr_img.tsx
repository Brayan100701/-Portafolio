interface Props {
  img: string;
  index: number;
  certificate: string;
}

export default function Carr_img({ img, index, certificate }: Props) {
  const clase = index === 0 ? "carousel-item active" : "carousel-item";
  return (
    <>
      <div className={clase}>
        <img src={img} className="d-block w-100" alt="..." />
        <div className="row text-center">
          <a href={certificate} target="blank" className="certificate-link">
            <button className="btn btn-dark text-light">Ver Certificado</button>
          </a>
        </div>
      </div>
    </>
  );
}
