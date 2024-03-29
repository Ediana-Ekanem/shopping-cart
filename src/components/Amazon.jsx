import list from "../data";
import Card from "./Card";
import PropTypes from "prop-types";

const Amazon = ({ handleCount }) => {
  return (
    <>
      <section className="container mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
          {list.map((item) => (
            <Card key={item.id} item={item} handleCount={handleCount} />
          ))}
        </div>
      </section>
    </>
  );
};

Amazon.propTypes = {
  handleCount: PropTypes.func.isRequired,
};

export default Amazon;
