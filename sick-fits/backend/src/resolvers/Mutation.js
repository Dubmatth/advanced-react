const Mutations = {
    createItem(parent, args, ctx, info){
        // Check if they are logged in
        const item = ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info)
        return item
    }
    /* createDog(parent, args, ctx, info){
        // Create Dog !
        global.dogs = global.dogs || []
        const newDog = { name: args.name }
        global.dogs.push(newDog)
        return newDog
    } */
};

module.exports = Mutations;
