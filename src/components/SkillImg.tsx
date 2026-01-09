interface Props {
  img: string;
}

export default function SkillImg({ img }: Props) {
  return (
    <>
      <img className="rounded-circle iconos" src={img} />
    </>
  );
}
