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
            telefone:'',
            isento:'',
            tipoEmpresa:'',
            cep:'',
            endereco:'',
            numero:'',
            complemento:'',
            bairro:'',
            estado:'',
            cidade:''

        },
        barProgress:'',
        estados:'',
        cidades:'',
        status:'btn-secondary',
        barPercent:15,
        widthPercent:'width:15%',
        icon35:'btn-secondary',
        icon55:'btn-secondary',
        icon75:'btn-secondary',
        icon100:'btn-secondary',
        history:15
       

    },
    mutations:{
        mutEstados(state,estadosShow){
            state.estados=estadosShow
        },
        mutCidades(state,cidadesShow){
            state.cidades=cidadesShow
        },
        mut35(state,actionStatus){
            state.icon35=actionStatus
        }, 
        mut55(state,actionStatus){
            state.icon55=actionStatus
        },
         mut75(state,actionStatus){
            state.icon75=actionStatus
        }, 
        mut100(state,actionStatus){
            state.icon100=actionStatus
        },
        mutBarPercent(state,actionBarPercent){
            state.barPercent=actionBarPercent
        },
        mutWidthPercent(state,actionWidthPercent){
            state.widthPercent=actionWidthPercent
        },
        mutForwardHistory(state,actionForwardHistory){
            state.history=actionForwardHistory
        },
        mutBackHistory(state,actionBackHistory){
            state.history=actionBackHistory
        },
        mutBackBarPercent(state,actionBackBarPercent){
            state.barPercent=actionBackBarPercent
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
       
        actionStatus({commit},data){
            console.log(data)
            let status='btn-primary';
            switch (data) {
                case 35:
                    commit('mut35',status)
                    
                    break;
                case 55:
                    commit('mut55',status)
                    
                    break;
                case 75:
                    commit('mut75',status)
                    
                    break;
                case 100:
                    commit('mut100',status)
                    
                    break;
            
                default:
                    break;
            }

        },
        actionBarPercent({commit},data){
            let percent=parseInt(data)+20;

            
         //   console.log(data)

            commit('mutBarPercent',percent);

            
        },
        actionBackBarPercent({commit},data){
            commit('mutBackBarPercent',data);
        },
        actionWidthPercent({commit},data){
            let width=`width:${data}%`;
            commit('mutWidthPercent',width);
        },
        actionForwardHistory({commit},data){
            
            
            let percent=parseInt(data);
            
            if(percent <=100){
                commit('mutForwardHistory',percent);

              //  console.log(percent)
            }else{
                commit('mutForwardHistory',parseInt(data));
            }

           
        },
        actionBackHistory({commit},data){
            
            
            let percent=parseInt(data)-20
            
            if(percent >=15){
                console.log(percent)
                commit('mutBackHistory',percent);
            }else{
                commit('mutBackHistory',parseInt(data));
            }

           
        }
                
                
    }

                
 
}