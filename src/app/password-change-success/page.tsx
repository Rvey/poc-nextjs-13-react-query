export async function PasswordSuccessChange() {
  return (
    <div className="bg-primary">
      <main className="w-[90vw] m-auto">
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="h-[50px] bg-yellow"></div>

          <div className="mx-auto flex flex-col items-center bg-white px-6  py-[4rem] ">
            <div className="dark:bg-gray-800 dark:border-gray-700  w-[50%]  bg-secondary-light shadow sm:max-w-[40rem] md:mt-0 xl:p-0">
              <div className="space-y-4 p-6 text-center sm:p-8 md:space-y-6 ">
                <div className="text-center  ">
                  <p className="text-[18px] ">
                    Demande d'un nouveau mot de passe
                  </p>
                  <p className="py-2 text-[12px] ">
                    Chère cliente, Cher client,
                  </p>
                  <p className="py-2 text-[12px] ">
                    Nous venons de vous adresser un mail qui vous permettra de
                    choisir un nouveau mot de passe. Vous pouvez consulter dès
                    maintenant votre messagerie. Pour des raisons de sécurité,
                    les informations relatives au paiement seront supprimées.
                  </p>
                  <p className="py-2 text-[12px] ">A bientôt sur OCARZ.</p>
                  <button
                    type="submit"
                    className=" hover:bg-primary-700 focus:ring-primary-300 mt-2 bg-primary px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 dark:bg-primary"
                  >
                    Retour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
