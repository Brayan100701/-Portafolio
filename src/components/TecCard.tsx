import SkillImg from "./SkillImg";

type Props = {
  imList: string[];
  titulo: string;
  colorScheme: {
    cardColor: string;
  };
};

export default function TecCard({ imList, titulo, colorScheme }: Props) {
  return (
    <>
      <div className={"card " + colorScheme.cardColor}>
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
