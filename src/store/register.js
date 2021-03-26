import estadosCidades from '../assets/estados-cidades.json';

export default{
    namespaced:true,
    state:{
        data:{
            pessoa:'',
            razaoSocial:'',
            nomeFantasia:'',
            cnpj:'',
            inscricaoEstadual:'',
            isento:'',
            tipoEmpresa:'',
            cep:'',
            endereco:'',
            mumero:'',
            complemento:'',
            bairro:'',
            estado:'',
            cidade:''

        },
        barProgress:'',
        estados:'',
        cidades:'',
        cnpj:{message:'',status:true}

    },
    mutations:{
        mutEstados(state,estadosShow){
            state.estados=estadosShow
        },
        mutCidades(state,cidadesShow){
            state.cidades=cidadesShow
        },
        mutCNPJ(state,cnpjValidation){
            state.cnpj=cnpjValidation
        }
    },
    actions:{
        estadosShow({commit}){

            const est=estadosCidades.estados;
            const result=[];
            est.forEach(ele=>{
                
               
                result.push(ele.nome);

               
            })
            commit('mutEstados',result)
        },
        cidadesShow({commit}){
            const cid=estadosCidades.estados;
            const result=[];
            cid.forEach(ele=>{
                
                result[ele.nome]=ele.cidades;
                


            })

           
            commit('mutCidades',result);
        },
        cnpjValidation({commit},payload){
            
            const cnpj=payload.replace(/[^\d]+/g,'');

            if(cnpj == '')
               
                commit('mutCNPJ',{message:'',status:true})
               
            
     
            if (cnpj.length != 14 )
               // result={message:'Obrigatório conter 14 digitos numéricos.',status:false}
                commit('mutCNPJ',{message:'Obrigatório conter 14 digitos numéricos.',status:false})
                
            
            
        
            // Elimina CNPJs invalidos conhecidos
            if (cnpj == "00000000000000" || 
                cnpj == "11111111111111" || 
                cnpj == "22222222222222" || 
                cnpj == "33333333333333" || 
                cnpj == "44444444444444" || 
                cnpj == "55555555555555" || 
                cnpj == "66666666666666" || 
                cnpj == "77777777777777" || 
                cnpj == "88888888888888" || 
                cnpj == "99999999999999")
                
                    // result={message:'Digito inválido',status:false}
                    commit('mutCNPJ',{message:'Digito inválido',status:false})

                    //console.log(result)
                
                
                
            // Valida DVs
         let  tamanho = cnpj.length - 2
            let  numeros = cnpj.substring(0,tamanho);
            let digitos = cnpj.substring(tamanho);
            let soma = 0;
        let pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                    pos = 9;
            }
            let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
               // result={message:'Digito inválido',status:false}
                commit('mutCNPJ',{message:'Digito inválido',status:false})

               // console.log(result)
            
               
                
             tamanho = tamanho + 1;
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false

                return true
                
                
               


            }
                
                
            }
                
 
}