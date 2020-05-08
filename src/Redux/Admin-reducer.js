const CHANGE_STATUS_OF_SHOW_OPTION = 'CHANGE_STATUS_OF_SHOW_OPTION';

let initialData ={
    newElement: [
        {
            key:0,
            name: '', price: 0,
            character: {
                screen: '',processor:'',
                RAM:'',internalMemory:'',
                operatingSystem:'',remainder:'',
                camera:{
                    basicCamera:'',
                    frontCamera:''
                },
            },
            photo:[
                {
                    id:'Golden',imgUrlOne: '',
                    imgUrlTwo:'',
                    imgUrlThree:'',
                },
                {
                    id:'Black',imgUrlOne: '',
                    imgUrlTwo: '',
                    imgUrlThree: '',
                },
                {
                    id:'Rose',imgUrlOne:'',
                    imgUrlTwo:'',
                    imgUrlThree:'',
                }
            ],
            stateColorIphone7:'',

            buttonNormalPrimeStatus: true,
            buttonCameraPrimeStatus: true,
            buttonMemoryNormalStatus:true,
            buttonMemoryPrimeStatus:true,
            buttonRAM_NormalStatus:true,
            buttonRAM_PrimeStatus:true,
            firstColor: '',
            secondColor: '',
            thirdColor: '',
            mainColor: ''

        },
    ],
    showOption: true
}

const AdminReducer = (state = initialData,action) =>{
    switch (action.type) {
        case CHANGE_STATUS_OF_SHOW_OPTION:{
            return{
                ...state,
                showOption: action.status
            }
        }

    }
    return state;
}

export const changeStatusOfShowOption = (status) =>({type:CHANGE_STATUS_OF_SHOW_OPTION,status:status})

export default AdminReducer;