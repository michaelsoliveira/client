import { useContext, useEffect, useRef, useState } from "react"
import { Link } from "../../components/Link"
import { TrashIcon as TrashIconOut, PencilAltIcon as PencilAltIconOut
} from '@heroicons/react/outline'
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid'
import { GetServerSideProps } from "next"
import alertService from '../../services/alert'
import Modal from "../../components/Modal"
import withAuthentication from "../../components/withAuthentication"
import especieService, { EspecieType } from "../../services/especie"
import { AuthContext } from "../../contexts/AuthContext"
import { useForm } from "react-hook-form"

const EspecieIndex = () => {
    const [especies, setEspecies] = useState<EspecieType[]>([])
    const [selectedEspecie, setSelectedEspecie] = useState<EspecieType>()
    const [uploading, setUploading] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const { client } = useContext(AuthContext)
    const fileRef = useRef(null) as any
    // const formOptions = { resolver: yupResolver(validationSchema) }
    // const { register, handleSubmit, reset, formState: { errors }, getValues, setValue } = useForm()
    
    const loadEspecies = async () => {
        const { data: { especies } } = await client.get('especie')
        setEspecies(especies)
    }

    useEffect(() => {
        loadEspecies()
    }, [])

    function toogleDeleteModal(id: string) {
        const especie = especies.filter((especie: EspecieType) => especie.id === id)
        setSelectedEspecie(especie[0])
        setOpenModal(true)
    }

    async function deleteEspecie(id: string) {
        try {
            client.delete(`/especie/${id}`)
                .then(() => {
                    alertService.success('A espécie foi deletada com SUCESSO!!!')
                    loadEspecies()
                    setOpenModal(false)
                })
            // setespecies(especies.filter((especie: especieType) => especie.id !== id))
            
        } catch (error) {
            console.log(error)
        }       
    }
    function hideModal() {
        setOpenModal(false)
    }

    const handleImportEspecies = async (e: any) => {
        if (e.target.files.length > 0) {
            const formData = new FormData()
            formData.append('file', e.target?.files[0])
            await client.post('/especie/import', formData)
            
        } else {
            setUploading(false)    
        }

        setUploading(false)
        
    }

    const openFile = () => {
        fileRef.current?.click()
        setUploading(true)
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-between p-6 bg-gray-100">
                <h1 className="font-medium text-2xl font-roboto">Espécies</h1>
                <div className="overflow-hidden relative w-64 mt-4 mb-4">
                    <button
                        onClick={openFile}
                        disabled={uploading}
                        className="bg-indigo hover:bg-indigo-dark text-green-700 font-bold py-2 px-4 w-full inline-flex items-center"
                    >
                        <svg className="fill-green-700" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                        </svg>
                        <span className="ml-2">{uploading ? "Importando..." : "Importar Espécies"}</span>
                    </button>
                    <input
                        disabled={uploading} 
                        onChange={(e) => handleImportEspecies(e)}
                        ref={fileRef}
                        className="cursor-pointer absolute block opacity-0 pin-r pin-t" type="file" name="fileRef"
                    />
                </div>
                <Link
                    href='/especie/add'
                    className="px-6 py-2 text-white bg-green-700 hover:bg-green-800 rounded-md hover:cursor-pointer"
                >
                    Adicionar
                </Link>
            </div>
            <div className="flex flex-col p-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th
                        scope="col"
                        className="px-6 w-96 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Nome
                    </th>
                    <th
                        scope="col"
                        className="px-6 w-96 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Nome Vulgar
                    </th>
                    <th
                        scope="col"
                        className="w-96 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Nome Científico
                    </th>
                    <th scope="col" className="relative w-36 px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {especies.map((especie: any) => (
                    <tr key={especie.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col items-starter">
                            
                            <div className="text-sm font-medium text-gray-900">{especie?.nome}</div>
                        </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{especie.nomeOrgao}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">
                            <div className="text-sm text-gray-500">{especie.nomeCientifico}</div>
                        </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex flex-row items-center">
                        <Link href={`/especie/update/${especie.id}`}>
                            <PencilAltIcon className="w-5 h-5 ml-4 -mr-1 text-green-600 hover:text-green-700" />
                        </Link>
                        <Link href="#" onClick={() => toogleDeleteModal(especie.id)}>
                            <TrashIcon className="w-5 h-5 ml-4 -mr-1 text-red-600 hover:text-red-700" />
                        </Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
            </div>
            {openModal &&
                <Modal
                    styleButton="bg-red-600 hover:bg-red-700 focus:ring-red-500"
                    title="Deletar especier"
                    buttonText="Deletar"
                    bodyText={`Tem certeza que seja excluir a especie ${selectedEspecie?.nome}?`}
                    data={selectedEspecie}
                    parentReturnData={toogleDeleteModal}
                    parentFunction={deleteEspecie}
                    hideModal={hideModal}
                    open={openModal}
                />}
        </div>
    </div>
    )
}

export default withAuthentication(EspecieIndex)
