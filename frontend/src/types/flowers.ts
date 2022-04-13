export interface FlowersState {
    flowers: FlowerState[],
    status: boolean | null,
    error: string | null,
    loading: boolean
}

interface FlowerState {
    id: number,
    name: string,
    number: number
}