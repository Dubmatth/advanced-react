import SingleItem from '../components/SingleItem';

const Item = props => {
  const { id } = props.query;
  return (
    <div>
      <SingleItem id={id} />
    </div>
  );
};

export default Item;
