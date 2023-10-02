import {atom} from "recoil"


export const ListData=atom({
    key:'ListData',
    default:[]
})

export const ChatHistroyAtom=atom({
    key:"AtomChatHistory",
    default:[]
})

export const CurrentSessionAtom=atom({
    key:"SessionId",
    default:null
})


