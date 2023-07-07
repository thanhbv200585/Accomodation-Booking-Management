import React from 'react';
import { Toast } from 'primereact/toast';

const EditToast = () => {
  let toast;

  const showEditSuccessToast = () => {
    toast.show({
      severity: 'success',
      summary: 'Edit Success',
      detail: 'Your information has been successfully edited.',
      life: 3000
    });
  };

  return (
    <Toast ref={(el) => (toast = el)} />
  );
};

export default EditToast;
