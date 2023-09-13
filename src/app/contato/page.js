import CustomButton from "@/components/utils/CustomButton";

const user = {name: "Geovanny", email: "geovanny@gmail.com", avatar: "aaaa"}

const Contato = () => {
    return(
      <div>
        <h1>Contatos</h1>
        <CustomButton titulo="Login"/>
        <CustomButton titulo="Cadastro" num='10' idade='25'/>
        <CustomButton user={user}/>
      </div>
    )
  }
  
  export default Contato;