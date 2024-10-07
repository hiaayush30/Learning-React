import { atomFamily } from "recoil";
import { TODOS } from "./todos";

//atom which returns an array
export const todosAtom=atom({
  key:'todosAtom',
  default:TODOS
})
//even if 1 todo changes all the componenets using this atom re render

//better way
//atomFamily returns a function that returns writable atoms
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {   //id will have to be passed during useRecoilValue
    return TODOS.find(x => x.id === id)
  },
});