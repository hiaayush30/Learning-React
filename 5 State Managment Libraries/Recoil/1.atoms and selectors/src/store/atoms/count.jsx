import {atom} from 'recoil';

export const countAtom=atom({
    key:'countAtom',  //to uniquely identify the item,
    default:0 
});

