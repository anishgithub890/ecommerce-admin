'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import Modal from '@/components/ui/modal';

export const StoreModal = () => {
  const storeMdoal = useStoreModal();

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeMdoal.isOpen}
      onClose={storeMdoal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};