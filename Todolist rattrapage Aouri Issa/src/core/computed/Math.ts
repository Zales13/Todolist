export const useMath = {
    computed_id: (todos : Object[]) => {
        if(todos.length === 0) return 0;
        return Math.max(...todos.map((todo : any) => todo.id)) + 1;
    }
}