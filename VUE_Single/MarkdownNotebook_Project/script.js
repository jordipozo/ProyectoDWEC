new VTTCue({
    el:'#notebook',
    data(){
        return{
            content:'Esto es una nota de prueba.'
        }
    },
    computed:{
        notePreview(){
            return marked (this.content)
        },
    },
})