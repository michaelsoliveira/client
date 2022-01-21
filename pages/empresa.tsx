const Empresa = () => {
    return (
        <div className="px-4 py-4">
            <div className="mt-10 sm:mt-0 shadow-md">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="lg:p-6 p-4">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Cadastro de Empresa</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Entre com as informações iniciais de sua empresa como ter acesso ao BOManejo.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text" name="first_name" id="first_name" className="field-text" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text" name="last_name" id="last_name" className="field-text" />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="text" name="email_address" id="email_address" className="field-text" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                                    <select id="country" name="country" className="mt-1 relative flex w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                                    <option>Brasil</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                                <input type="text" name="street_address" id="street_address" className="field-text" />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                <input type="text" name="city" id="city" className="field-text" />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                                <input type="text" name="state" id="state" className="field-text" />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                                <input type="text" name="postal_code" id="postal_code" className="field-text" />
                            </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empresa