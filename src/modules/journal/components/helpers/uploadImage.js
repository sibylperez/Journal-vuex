import cloudinary from "@/api/cloudinary"


const uploadImage = async ( file ) => {
    if (!file) return
    try {
        const formData = new FormData()
        formData.append('upload_preset', 'journal-vue')
        formData.append('file', file)

        const { data } = await cloudinary.post('', formData)
        console.log(data)

        return data.secure_url
        
    } catch (error) {
        console.error('Error upload image')
        console.log(error)
        return null
    }
}

export default uploadImage