import {atom, selector} from "recoil";

const countAtom = atom({
    key:"countkey",
    default:0
});

//similar to useMemo()
const evenSelector = selector({
    key: "evenSelector",
    get: (props)=>{
        const c = props.get(countAtom)
        return c%2 == 0;
    }
})

export {
    countAtom,
    evenSelector
}
