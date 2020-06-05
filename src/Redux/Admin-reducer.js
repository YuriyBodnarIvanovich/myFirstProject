const CHANGE_STATUS_OF_SHOW_OPTION = 'CHANGE_STATUS_OF_SHOW_OPTION';
const CHANGE_INDEX_OF_COLOR = 'CHANGE_INDEX_OF_COLOR';
const CHANGE_STATUS_OF_OPTION_BUTTON_ADMIN = 'CHANGE_STATUS_OF_OPTION_BUTTON_ADMIN';
const CHANGE_INDEX_OF_OPTION = 'CHANGE_INDEX_OF_OPTION';

let initialData ={
    newElement: [
        {
            name: '', price:0,
            startPrice:0,//the some price but not change
            startPriceRAM:0,
            startPriceInternalMemory: 0,
            startPriceBasicCamera: 0,
            startPriceInternalFrontCamera: 0,
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
                    color:'',
                    imgSrc:[
                        {src:''},
                        {src:''},
                        {src:''},
                    ],
                },
            ],
            stateColorIphone7:'',
            buttonOption:[
                {
                    RAM: {value:'',price:0},
                    internalMemory:{value:'',price:0},
                    basicCamera:{value:'',price:0},
                    frontCamera:{value:'',price:0},
                },
            ],
            buttonNormalPrimeStatus: true,
            buttonCameraPrimeStatus: true,
            buttonMemoryNormalStatus:true,
            buttonMemoryPrimeStatus:true,
            buttonRAM_NormalStatus:true,
            buttonRAM_PrimeStatus:true,
            mainColor: '',
            status: true,

        },
    ],
    photo:[//new element for color array in element of array iphone
        {
            color:'',
            imgSrc:[
                {src:''},
                {src:''},
                {src:''},
            ],
        },
    ],
    buttonOption:[// new element for options
        {
            RAM: {value:' ',price:0},
            internalMemory:{value:' ',price:0},
            basicCamera:{value:' ',price:0},
            frontCamera:{value:' ',price:0},
        },
    ],
    showOption: true,
    indexOfOption: 0,
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
        case CHANGE_STATUS_OF_OPTION_BUTTON_ADMIN:{
            return{
                ...state,
                statusOfOptionButton: action.upStatus
            }
        }
        case CHANGE_INDEX_OF_OPTION:{
            return {
                ...state,
                indexOfOption: action.newIndex
            }
        }
    }
    return state;
}
export default AdminReducer;