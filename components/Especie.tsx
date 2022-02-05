import Select from './Select'
import { FormInput } from './FormInput'
import { createRef, FormEvent, useRef, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import alertService from '../services/alert'
import { AuthContext } from '../contexts/AuthContext'
import { useSession } from 'next-auth/react'

const Especie = ({ id }: any) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const inputNome = useRef<HTMLInputElement>()
    const { client } = useContext(AuthContext)
    const { data: session } = useSession()
    const router = useRouter()
    const isAddMode = !id

    useEffect(() => {        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        async function loadEspecie() {
        
            if (!isAddMode && typeof session !== typeof undefined) {
                
                const { data } = await client.get(`/especie/${id}`)
                
                for (const [key, value] of Object.entries(data)) {
                    setValue(key, value, {
                        shouldValidate: true,
                        shouldDirty: true
                    })
                }
            }
        }
        
        loadEspecie()

    }, [session, isAddMode, client, id])

    const selectedCategoria = (data: any) => {
        console.log(data)
    }

    async function onSubmit(data: any) {
        try {
            return isAddMode
                ? createEspecie(data)
                : updateEspecie(id, data)
        } catch (error: any) {
            alertService.error(error.message);
        }
        
    }

    async function createEspecie(data: any) {
        // await especieService.create(data)
        client.post('especie', data)
            .then((response: any) => {
                const { especie } = response.data
                alertService.success(`Especie ${especie?.nome} cadastrada com SUCESSO!!!`);
                router.push('/especie')
            }) 
    }

    async function updateEspecie(id: string, data: any) {
        
        client.put(`/especie/${id}`, data)
            .then((response: any) => {
                const { especie } = response.data
                alertService.success(`Especie ${especie?.nome} atualizada com SUCESSO!!!`);
                router.push('/especie')
            })
    }

    return (
        <div>
            <div className="bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
                    <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                            
                            <FormInput
                                name="nome"
                                label="Nome"
                                register={register}
                                errors={errors}
                                rules={ {required: 'O campo nome é obrigatório'} }
                                // hasError={!!errors.nome}
                                // errorMessage={errors.nome?.message}
                                // forwardRef={inputNome}
                                id="nome"
                                className="pb-4"
                            />
                            <FormInput
                                id="nomeOrgao"
                                name="nomeOrgao"
                                label="Nome Vulgar"
                                register={register}
                                errors={errors}
                                rules={
                                    {
                                        minLength: {
                                            value: 3,
                                            message: 'Por favor, preencha o campo com no mínimo 3 caracteres'
                                        }
                                    }}
                                className="pb-4"
                            />
                            <FormInput
                                id="nomeCientifico"
                                name="nomeCientifico"
                                label="Nome Científico"
                                register={register}
                                errors={errors}
                                rules={
                                    {
                                        minLength: {
                                            value: 3,
                                            message: 'Por favor, preencha o campo com no mínimo 3 caracteres'
                                        }
                                    }}
                                className="pb-4"
                            />

                            <div className='pb-4'>
                                <Select label="Categoria" value={ selectedCategoria } />
                            </div>
                            
                            <button className="w-full bg-green-600 text-white p-3 rounded-md">Salvar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Especie