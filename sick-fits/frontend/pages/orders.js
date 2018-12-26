import PleaseSignin from '../components/PleaseSignin';
import OrdersList from '../components/OrdersList';

const OrdersPage = props => (
  <div>
    <PleaseSignin>
      <OrdersList />
    </PleaseSignin>
  </div>
);

export default OrdersPage;
