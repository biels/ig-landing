import {useEffect, useState} from "react";
import * as _ from 'lodash'

export const useC3Store = <S>(createStore: () => S): S => {
    const [store, setStore] = useState(null as S);
    let storeInst: S = store;
    if (!storeInst) storeInst = createStore();
    let effect = () => {
        setStore(storeInst);
        return () => {

        }
    };
    useEffect(effect as any, [])
    return storeInst
}
