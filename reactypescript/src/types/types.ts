export type PostProps = {
    id: number;
    title: string;
    body: string
}

//postPropes.types.ts
export type UserType = {
    name: string,
    sessionId: number
}

export type StateType = {
    theme: string,
    fontSize: number
}


export type actionType = {
    type: "CHANGE_THEME" | "CHANGE_FONTSIZE",
    payload: number
}