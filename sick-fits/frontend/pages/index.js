import Items from '../components/Items';

const Home = props => (
  <div>
    <Items page={parseFloat(props.query.page)} />
  </div>
);

export default Home;
