import './world_grid.css'
const World_grid = ({ country, places }) => {
  return (
    <div className="world">
      <div></div>
      <p>{country}</p>
      <p>{places}</p>
    </div>
  );
};

export default World_grid;
