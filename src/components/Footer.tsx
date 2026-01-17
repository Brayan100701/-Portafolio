interface Props {
  colorScheme: {
    cardColor: string;
  };
}

export default function Footer({ colorScheme }: Props) {
  return (
    <>
      <section id="footer" className="">
        <div className="row"></div>
      </section>
    </>
  );
}
