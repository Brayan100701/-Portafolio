import AptitudesList from "./AptitudesList";

interface Props {
  colorScheme: {
    cardColor: string;
  };
}

export default function MasDe({ colorScheme }: Props) {
  return (
    <>
      <section id="mas-de" className="container p-3 mb-2 text-light">
        <br />
        <br />
        <h2>Más sobre mi</h2>
        <br />
        <div className="row">
          <div className="col-sm-7 mb-3 mb-sm-0">
            <div className={"card " + colorScheme.cardColor}>
              <div className="card-body mas-de">
                <h5>Aptitudes</h5>
                <ListElements elementList={AptitudesList.aptitudes} />
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className={"card " + colorScheme.cardColor}>
              <div className="card-body mas-de">
                <h5>Hobbies</h5>
                <ListElements elementList={AptitudesList.hobbies} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface ListElement {
  elementList: string[];
}

function ListElements({ elementList }: ListElement) {
  return (
    <>
      <ul className="list-group list-group-flush extra">
        {elementList.map((e) => (
          <li className="list-group-item bg-transparent">{e}</li>
        ))}
      </ul>
    </>
  );
}
