const CHANGE_STATUS_OF_SHOW_OPTION = 'CHANGE_STATUS_OF_SHOW_OPTION';
const CHANGE_INDEX_OF_COLOR = 'CHANGE_INDEX_OF_COLOR';

let initialData ={
    newElement: [
        {
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
                    color:'',imgUrlOne: '',
                    imgUrlTwo:'',
                    imgUrlThree:'',
                },
            ],
            stateColorIphone7:'',

            buttonNormalPrimeStatus: true,
            buttonCameraPrimeStatus: true,
            buttonMemoryNormalStatus:true,
            buttonMemoryPrimeStatus:true,
            buttonRAM_NormalStatus:true,
            buttonRAM_PrimeStatus:true,
            mainColor: ''

        },
    ],
    color:[
        {
            color:'',imgUrlOne: '',
            imgUrlTwo:'',
            imgUrlThree:'',
        },
    ],
    showOption: true,
    indexOfColor: 0
}

const AdminReducer = (state = initialData,action) =>{
    switch (action.type) {
        case CHANGE_STATUS_OF_SHOW_OPTION:{
            return{
                ...state,
                showOption: action.status
            }
        }
        case CHANGE_INDEX_OF_COLOR:{
            return{
                ...state,
                indexOfColor: action.newIndex
            }
        }

    }
    return state;
}
export default AdminReducer;