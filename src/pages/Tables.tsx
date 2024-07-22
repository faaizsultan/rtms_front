import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import DeviceTable from '../components/Tables/DeviceDetailsTabular';
import TableTwo from '../components/Tables/TableTwo';
import DefaultLayout from '../layout/DefaultLayout';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Devices" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
