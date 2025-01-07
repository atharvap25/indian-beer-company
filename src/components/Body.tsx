import "./Body.css";

export default function Body() {
  return (
    <div className="container-fluid">
      <img src="/titleImg.png" alt="Indian Beer Company" className="titleImg" />

        <p className="text-center heading">Pouring Soon...</p>
      <img src="/pouringSoon.gif" alt="Pouring Soon" className="pouring-gif" />
    </div>
  );
}
