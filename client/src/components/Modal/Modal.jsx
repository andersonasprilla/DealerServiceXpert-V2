import { useState } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import Contact from './Contact'
import Hat from './Hat'
import RepairOrder from './RepairOrder'
import CustomerName from './CustomerName'
import Vehicle from './Vehicle'
import Priority from './Priority'

const Modal = () => {
  const [open, setOpen] = useState(true)

  const [formData, setFormData] = useState({
    hat: '',
    repairOrder: '',
    customerName: '',
    vehicle: '',
    contact: '',
    priority: 'Drop Off',  // Default value
  });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { hat, repairOrder, customerName, vehicle, contact } = formData;
    const isEmpty = [hat, repairOrder, customerName, vehicle, contact].some((value) => value === '');

    if (isEmpty) {
      alert('Please fill out all fields.');
      return;
    }

    console.log('Form submitted:', formData);
    setOpen(false);
  };


  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={() => setOpen(false)}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className=" justify-items-center min-w-max relative transform overflow-hidden rounded-3xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">

                <form className='flex gap-x-5' onSubmit={handleSubmit}>
                  <Hat value={formData.hat} onChange={handleInputChange} />
                  <RepairOrder value={formData.repairOrder} onChange={handleInputChange} />
                  <CustomerName value={formData.customerName} onChange={handleInputChange} />
                  <Vehicle value={formData.vehicle} onChange={handleInputChange} />
                  <Contact value={formData.contact} onChange={handleInputChange} />
                  <Priority value={formData.priority} onChange={handleInputChange} />
                  <button type="submit" style={{ display: 'none' }}></button>
                </form>

              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
