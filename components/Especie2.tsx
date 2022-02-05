const Especie2 = () => {
    return (
        <div>
            <form className="form bg-white p-6 my-10 relative">
               
                <div className="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5">
                    <i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i>
                </div>
                <h3 className="text-2xl text-gray-900 font-semibold">Let us call you!</h3>
                <p className="text-gray-600"> To help you choose your property</p>
                <div className="flex space-x-5 mt-3">
                    <input type="text" name="nome" id="nome" placeholder="Nome Espécie" className="border p-2  w-1/2" />
                    <input type="tel" name="nomeOrgao" id="nomeOrgao" placeholder="Nome Vulgar" className="border p-2 w-1/2" />
                </div>
                <input type="email" name="nomeCientifico" id="nomeCientifico" placeholder="Nome Científico" className="border p-2 w-full mt-3" />
                
                
                <input type="submit" value="Submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3" />

            </form>
        </div>
    )
}

export default Especie2