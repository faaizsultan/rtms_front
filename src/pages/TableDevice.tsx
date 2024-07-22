import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DeviceDetailsTabular from '../components/Tables/DeviceDetailsTabular';
import DefaultLayout from '../layout/DefaultLayout';

const DeviceTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Devices" />

      <div className="flex flex-col gap-10">
        <DeviceDetailsTabular />
      </div>
    </DefaultLayout>
  );
};

export default DeviceTable;
