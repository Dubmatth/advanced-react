import CreateItem from '../components/CreateItem';
import PleaseSignin from '../components/PleaseSignin';

const Sell = props => (
  <div>
    <PleaseSignin>
      <CreateItem>Sell a item</CreateItem>
    </PleaseSignin>
  </div>
);

export default Sell;
