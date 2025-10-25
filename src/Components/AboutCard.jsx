export default function AboutCard({ service: { sname, sdescryp, imgsrc } }) {
  console.log(sname);

  return (
    <>
      <div className="card">
        <img src={imgsrc} alt="service" className={sname} />
        <h2 className="service">{sname}</h2>
        <h2 className="servdescryp">{sdescryp}</h2>
      </div>
    </>
  );
}
