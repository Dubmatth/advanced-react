import Items from '../components/Items';

const Home = props => {
  const { page } = props.query;
  return (
    <div>
      <Items page={parseFloat(page)} />
    </div>
  );
};

export default Home;
