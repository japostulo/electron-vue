import { contextBridge } from "electron";

const exposeMethodsInMainWorld: any = {
    hello() {
        return 'world'
    }
}

contextBridge.exposeInMainWorld('api', exposeMethodsInMainWorld)