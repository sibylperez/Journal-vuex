export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero dicta, sunt temporibus reiciendis corporis voluptate quod quae enim provident odio nam rerum ea quidem doloribus hic ratione officia animi!",
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Second Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero dicta, sunt temporibus reiciendis corporis voluptate quod quae enim provident odio nam rerum ea quidem doloribus hic ratione officia animi!",
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Tercer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero dicta, sunt temporibus reiciendis corporis voluptate quod quae enim provident odio nam rerum ea quidem doloribus hic ratione officia animi!",
            picture: null
        },
    ]
})