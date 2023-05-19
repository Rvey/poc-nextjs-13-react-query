import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function InterstedByCarModal({
  data,
  isOpen,
  closeModal,
  openModal,
  router,
  setNomOffre,
  setVilleOffre,
  setIstimationPrix,
  estimationPrix,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-gray-900 text-lg font-medium leading-6"
                >
                  VEUILLEZ REMPLIR CE FPRMULAIRE POUR QU{"'"}ON VOUS CONTACTE
                </Dialog.Title>
                <div className="mt-2 flex flex-col gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full border-2 border-primary  bg-white px-2.5 py-2 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => {
                        setNomOffre(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="text-gray-500 dark:text-gray-400 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                    >
                      Nom & Prenom
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full border-2 border-primary  bg-white px-2.5 py-2 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => {
                        setVilleOffre(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="text-gray-500 dark:text-gray-400 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                    >
                      Ville
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="default-range"
                      className="text-gray-900 mb-2 block text-sm font-medium "
                    >
                      Prix
                    </label>
                    <input
                      id="default-range"
                      type="range"
                      defaultValue="30 000"
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-primary dark:bg-primary"
                      min={10000}
                      max={1000000}
                      onChange={(e) => {
                        setIstimationPrix(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="default-range"
                      className="text-gray-900 mb-2 block text-sm font-medium "
                    >
                      Prix a propose {estimationPrix} DH
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="border-primary bg-primary">
                    {/* <span className="text-[10px] font-bold">Prix</span> */}
                    <button
                      className="xl:px-[40px] 2xl:px-[90px] h-[60px]  w-full border-[1px] text-[14px] text-white "
                      onClick={() => {
                        openModal();
                        router.push(
                          `https://api.whatsapp.com/send?phone=212691061644&amp;&text=bonjour je suis ${data?.title} de ${data?.city?.name} je vous propose ${data?.price} Dhs pour la ${data?.title} que vous avez mis sur https://ocarz.ma/fr/annonce/land-rover-range-rover-evoque/`
                        );
                      }}
                    >
                      Faire une offre
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
