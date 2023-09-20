import CustomButton from "@/components/utils/CustomButton";

const Contato = () => {
    return(
      <div>
        <h1>Contatos</h1>
        <CustomButton variant='primary'title='Login'/>
        <CustomButton variant='secondary'title='Cadastrar-se'/>
        <CustomButton variant='ghost'title='Cancelar'/>
      </div>
    )
  }
  
  export default Contato;