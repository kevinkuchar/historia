import { Scene, Frame } from "../types/index";

type Iteratee = Scene | Frame

export const getNextIndex = (array: Iteratee[], currentMember: Iteratee): number => {
    let currentIndex = array.findIndex((member: Iteratee) => {
        return member.id === currentMember.id
    })

    return currentIndex < array.length - 1 ? currentIndex + 1 : 0
}