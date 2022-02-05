import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Empresa from "../../../components/Empresa";


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
    const session = await getSession(ctx)
    
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }  

    return {
        props: {
            id: ctx.params?.id
        }
    }
}

export default Empresa;