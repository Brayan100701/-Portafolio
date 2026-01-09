import SkillImg from "./SkillImg";

type Props = {
  imList: string[];
  titulo: string;
};

export default function TecCard({ imList, titulo }: Props) {
  return (
    <>
      <div className="card bg-secondary text-light">
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <div className="img-grids">
            {imList.map((im, index) => (
              <SkillImg key={index} img={im} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
