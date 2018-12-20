import PleaseSignin from '../components/PleaseSignin';
import Permissions from '../components/Permissions';

const permissionsPage = props => (
  <div>
    <PleaseSignin>
      <Permissions />
    </PleaseSignin>
  </div>
);

export default permissionsPage;
