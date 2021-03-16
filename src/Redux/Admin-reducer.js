const CHANGE_STATUS_OF_SHOW_OPTION = 'CHANGE_STATUS_OF_SHOW_OPTION';
const CHANGE_INDEX_OF_COLOR = 'CHANGE_INDEX_OF_COLOR';
const CHANGE_STATUS_OF_OPTION_BUTTON_ADMIN = 'CHANGE_STATUS_OF_OPTION_BUTTON_ADMIN';
const CHANGE_INDEX_OF_OPTION = 'CHANGE_INDEX_OF_OPTION';
const CHANGE_STATUS_OF_ITEMS_COLOR  = 'CHANGE_STATUS_OF_ITEMS_COLOR';
const ADD_ELEMENT_TO_COLOR_ARRAY = 'ADD_ELEMENT_TO_COLOR_ARRAY';
const FILL_VALUE_OF_COLOR = 'FILL_VALUE_OF_COLOR';
const SHOW_OPTIONS = 'SHOW_OPTIONS';
const INPUT_DATA_TO_ELEMENT = 'INPUT_DATA_TO_ELEMENT';
const SHOW_NAME = 'SHOW_NAME';
const CHANGE_NUMBER_OF_COLOR = 'CHANGE_NUMBER_OF_COLOR';
const CHANGE_ACTIVE_COLOR = 'CHANGE_ACTIVE_COLOR';
const CHANGE_USERS_DATA = 'CHANGE_USERS_DATA';

let initialData ={
    usersData: [],
    newElement: [
        {
            name: '', price: 0,
            character: {
                screen:'', processor: '',
                RAM: '', internalMemory: '', remainder: '',
                SSD:'', videoCard:'', WorkingTime:'',
                Bluetooth:'',Notifications:'', OperationSystem:'',
                KindOfProduct:'',
                camera:{
                    basicCamera: '',
                    frontCamera: '',
                },
            },
            status: true,
            photo:[
                {
                    color:'',
                    imgSrc:[
                        "",
                        "",
                        "",
                    ],
                },
            ],
            idAuthor:0
        },
    ],

    emptyElement:[
        {
            name: '', price: 0,
            character: {
                screen:'', processor: '',
                RAM: '', internalMemory: '', remainder: '',
                SSD:'', videoCard:'', WorkingTime:'',
                Bluetooth:'',Notifications:'', OperationSystem:'',
                KindOfProduct:'',
                camera:{
                    basicCamera: '',
                    frontCamera: '',
                },
            },
            status: true,
            photo:[
                {
                    color:'',
                    imgSrc:[
                        "",
                        "",
                        "",
                    ],
                },
            ],
            idAuthor:0,
        },
    ],

    photo:[//new element for color array in element of array iphone
        {
            color:'',
            imgSrc:[
                "",
                "",
                "",
            ],
        },
    ],

    adminColorContainer:[

    ],


    numberOfColor:0,
    newItemOfColorContainer:{
        index:0,
        status: false,
        color: '',
        photo:[
            {
                value:'',
                status:false
            }
        ]
    },

    statusOfNewItemsOfColor: false,
    valueOfColorFiled: '',
    optionsContainerField:[
        {
            name:'Screen',
            parentsField:'',
            kindOfOfOptions:'screen',
        },
        {
            name:'Processor',
            parentsField:'',
            kindOfOfOptions:'processor',
        },
        {
            name:'Front Camera',
            parentsField:'camera',
            kindOfOfOptions:'frontCamera',
        },
        {
            name:'Basic Camera',
            parentsField:'camera',
            kindOfOfOptions:'basicCamera',
        },
        {
            name:'Internal Memory',
            parentsField:'',
            kindOfOfOptions:'internalMemory',
        },
        {
            name:'RAM',
            parentsField:'',
            kindOfOfOptions:'RAM',
        },
        {
            name:'Remainder',
            parentsField:'',
            kindOfOfOptions:'remainder',
        },
        {
            name:'SSD',
            parentsField:'',
            kindOfOfOptions:'SSD',
        },
        {
            name:'VideoCard',
            value:'',
            parentsField:'',
            kindOfOfOptions:'videoCard',
        },
        {
            name:'Working Time',
            parentsField:'',
            kindOfOfOptions:'WorkingTime',
        },
        {
            name:'Bluetooth',
            parentsField:'',
            kindOfOfOptions:'Bluetooth',
        },
        {
            name:'Notifications',
            parentsField:'',
            kindOfOfOptions:'Notifications',
        },
        {
            name:'Operation System',
            parentsField:'',
            kindOfOfOptions:'OperationSystem',
        },
        {
            name:'Kind Of Product',
            parentsField:'',
            kindOfOfOptions:'KindOfProduct',
        },
    ],

    showCatalogOfOptions: false,
    showOption: true,
    indexOfOption: 0,
    indexOfColor: 0,
    showName: false,
    colorActive: 0,
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
        case CHANGE_STATUS_OF_ITEMS_COLOR:{
            return {
                ...state,
                statusOfNewItemsOfColor: action.status
            }
        }
        case ADD_ELEMENT_TO_COLOR_ARRAY:{
            return {
                ...state,
                adminColorContainer: action.array
            }
        }
        case FILL_VALUE_OF_COLOR:{
            return {
                ...state,
                valueOfColorFiled: action.value
            }
        }
        case SHOW_OPTIONS:{
            return {
                ...state,
                showCatalogOfOptions: action.status
            }
        }
        case INPUT_DATA_TO_ELEMENT:{
            return {
                ...state,
                newElement: action.newData
            }
        }
        case SHOW_NAME:{
            return {
                ...state,
                showName: action.status
            }
        }
        case CHANGE_NUMBER_OF_COLOR:{
            return {
                ...state,
                numberOfColor: action.value
            }
        }
        case CHANGE_ACTIVE_COLOR:{
            return {
                ...state,
                colorActive:action.newValue
            }
        }
        case CHANGE_USERS_DATA:{
            return{
                ...state,
                usersData: action.newData
            }
        }
    }
    return state;
}
export default AdminReducer;
