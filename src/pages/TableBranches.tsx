import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import BranchDetailsTabular from '../components/Tables/BranchDetailsTabular';
import DefaultLayout from '../layout/DefaultLayout';

const  BranchTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Devices" />

      <div className="flex flex-col gap-10">
        <BranchDetailsTabular />
      </div>
    </DefaultLayout>
  );
};

export default BranchTable;
